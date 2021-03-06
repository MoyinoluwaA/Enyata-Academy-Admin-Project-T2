<template>
        <div class="dashboard-container">
            <select class="form-select form-select-lg dashboard-header result-header" aria-label=".form-select-lg example">
                <option selected value="1" >Entries - Batch {{ batchId }}</option>
            </select>
            <p class="settings-sub-header mb-4">Comprises of all that applied for batch {{ batchId }}</p>

            <p v-if='error' class="fs-2 mt-4">An error occurred while fetching applicants data</p>
            <div v-else class="result-wrapper table-responsive">
                <table class="table table-borderless my-4">
                    <thead class="table-head">
                        <tr class="text-center">
                            <th scope="col" class="py-3">Name</th>
                            <th scope="col" class="py-3">Email</th>
                            <th scope="col" class="py-3">Dob - Age 
                                <img class="table-sorting ms-1" src="@/assets/icons/sorting.svg" alt="sort" />
                            </th>
                            <th scope="col" class="py-3">Address</th>
                            <th scope="col" class="py-3">University</th>
                            <th scope="col" class="py-3 text-nowrap">CGPA 
                                <img class="table-sorting ms-1" src="@/assets/icons/sorting.svg" alt="sort" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <p v-if='applicants === []' class="fs-3 fw-bold">There are no applicants yet. Check back later</p>
                        <tr v-else class="table-data" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" @click="selectApplicant(applicant.id)"
                            aria-controls="offcanvasRight" v-for="applicant in applicants" :key="applicant.id">
                            <td class="p-3 mb-2">{{ applicant.first_name }} {{ applicant.last_name }}</td>
                            <td class="p-3 mb-2">{{ applicant.email }}</td>
                            <td class="p-3 mb-2">{{ applicant.date_of_birth }} - {{ applicant.age }}</td>
                            <td class="p-3 mb-2">{{ applicant.address }}</td>
                            <td class="p-3 mb-2">{{ applicant.university }}</td>
                            <td class="p-3 mb-2 text-center">{{ applicant.cgpa }}</td>
                        </tr>
                        <OffCanvas :applicant='applicant' />
                    </tbody>
                </table>
            </div>
            <Modal id='exampleModal' @click="updateApplicantStatus('approved')" modalText='Are you sure you want to approve this application?' />
            <Modal id='exampleModal2'  @click="updateApplicantStatus('declined')" modalText="Are you sure you want to decline this application?" />
        </div>
</template>

<script>
import OffCanvas from '@/components/Offcanvas.vue'
import Modal from '@/components/Modal.vue'
import ApplicationService from '@/services/application'
import { DateTime } from 'luxon'
import { mapGetters } from 'vuex'

export default {
    name: 'ApplicationEntries',
    components: {
        Modal,
        OffCanvas
    }, 
    data() {
        return {
            applicants: [],
            batchId: 1,
            error: false,
            applicant: {}
        }
    },
    computed: {
        ...mapGetters(['getBatch'])
    },
    async mounted() {
        try {
            const response = await ApplicationService.getApplicantByBatch(this.batchId)
            if (response.length === 0) {
                return
            } else {
                response.map(item => {
                    const dob = DateTime.fromISO(item.date_of_birth).toFormat('dd/MM/yyyy')
                    const floatingAge = Math.abs(DateTime.fromISO(item.date_of_birth).diffNow(['years']).toObject().years)
                    const age = Math.floor(floatingAge)
                    item.date_of_birth = dob
                    item.age = age
                    item.cgpa = Number(item.cgpa).toFixed(2)
                })
                this.applicants = response
                this.batchId = this.getBatch
            }

        } catch (error) {
            this.error = true
        }
    },
    methods: {
        selectApplicant(id) {
            this.$route.query.applicantId = id
            const [ applicant ] = this.applicants.filter(applicant => applicant.id === id)
            this.applicant = applicant
        },
        async updateApplicantStatus(status) {
            try {
                await ApplicationService.updateApplicantStatus(this.applicant.id, status)
            } catch (error) {
                this.$dtoast.pop({
                    preset: "error",
                    heading: 'Error occured',
                    content: error.response.data.message
                })
            }
            this.$router.push({ name: 'application-entries' })
        }
    }
}
</script>
