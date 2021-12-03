<template>
        <div class="dashboard-container">
            <select class="form-select form-select-lg dashboard-header result-header" aria-label=".form-select-lg example">
                <option selected value="1" >Entries - Batch 1</option>
            </select>
            <p class="settings-sub-header mb-4">Comprises of all that applied for batch {{ batchId }}</p>

            <p v-if='error' class="fs-2 mt-4">An error occurred while fetching applicants data</p>
            <div v-else class="table-responsive">
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
                            aria-controls="offcanvasRight" v-for="applicant in applicants" :key="applicant.id"
                        >
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
            <ApproveModal/>
            <DeclineModal/>
        </div>
</template>

<script>
import OffCanvas from '@/components/Offcanvas.vue'
import ApproveModal from '@/components/ApproveModal.vue'
import DeclineModal from '@/components/DeclineModal.vue'
import ApplicationService from '@/services/application'
import { DateTime } from 'luxon'

export default {
    name: 'ApplicationEntries',
    components: {
        ApproveModal,
        DeclineModal,
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
        }
    }
}
</script>
