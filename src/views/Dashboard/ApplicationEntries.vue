<template>
        <div class="dashboard-container">
            <select class="form-select form-select-lg dashboard-header result-header" aria-label=".form-select-lg example">
                <option selected value="1" >Entries - Batch 1</option>
            </select>
            <p class="settings-sub-header mb-4">Comprises of all that applied for batch {{ batchId }}</p>

            <div class="result-wrapper">
                <p v-if='error' class="fs-2">An error occurred while fetching applicants data</p>
                <table v-else class="table-wrapper text-center mb-4">
                    <thead class="table-head">
                        <tr>
                            <th class="table-col p-3">Name</th>
                            <th class="table-col p-3">Email</th>
                            <th class="table-col p-3">Dob - Age 
                                <img class="table-sorting ms-3" src="@/assets/icons/sorting.svg" alt="sort" />
                            </th>
                            <th class="table-col p-3">Address</th>
                            <th class="table-col p-3">University</th>
                            <th class="table-col p-3">CGPA 
                                <img class="table-sorting ms-3" src="@/assets/icons/sorting.svg" alt="sort" />
                            </th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr class="table-data mt-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" @click="selectApplicant(applicant.id)"
                            aria-controls="offcanvasRight" v-for="applicant in applicants" :key="applicant.id"
                        >
                            <td class="table-col p-3 mb-2">{{ applicant.first_name }}</td>
                            <td class="table-col p-3 mb-2">{{ applicant.email }}</td>
                            <td class="table-col p-3 mb-2">{{ applicant.date_of_birth }} - {{ applicant.age }}</td>
                            <td class="table-col p-3 mb-2">{{ applicant.address }}</td>
                            <td class="table-col p-3 mb-2">{{ applicant.university }}</td>
                            <td class="table-col p-3 mb-2">{{ applicant.cgpa }}</td>
                        </tr>
                        <OffCanvas :applicant='applicant' />
                        <!-- <div v-if='Object.entries(applicant).length > 0' class="offcanvas offcanvas-end p-4" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            <div class="text-start mt-4">
                                <img :src='applicant.picture.secure_url' class="applicant-img" alt='applicant-Image'>
                            </div>
                            <div class=" ps-0 mt-4 offcanvas-header">
                                <h6 class='mb-0' id="offcanvasRightLabel">Personal Details</h6>
                            </div>
                            <hr class="mb-0 mt-0"/>
                            <div class="offcanvas-body mt-4">
                                <form class="row text-start">
                                    <formInput
                                        inputBoxStyle=' col-md-6'
                                        inputStyle='border-1 input-bg-white'
                                        type='text'
                                        identifier='name'
                                        label='Name'
                                        labelStyle='form-label-gray'
                                        v-model="applicant.first_name"
                                        readonly
                                    />
                                    <formInput
                                        inputBoxStyle='col-md-6 '
                                        inputStyle='border-1 input-bg-white'
                                        type='email'
                                        identifier='email'
                                        label='Email'
                                        labelStyle='form-label-gray'
                                        v-model="applicant.email"
                                        readonly
                                    />
                                    <formInput
                                        inputBoxStyle='col-md-6 '
                                        inputStyle='border-1 input-bg-white'
                                        type='text'
                                        identifier='address'
                                        label='Address'
                                        labelStyle='form-label-gray'
                                        v-model="applicant.address"
                                        readonly
                                    />
                                    <formInput
                                        inputBoxStyle='col-md-6 '
                                        inputStyle='border-1 input-bg-white'
                                        type='text'
                                        identifier='university'
                                        label='University'
                                        labelStyle='form-label-gray'
                                        v-model="applicant.university"
                                        readonly
                                    />
                                    <formInput
                                        inputBoxStyle='col-md-6 '
                                        inputStyle='border-1 input-bg-white'
                                        type='text'
                                        identifier='courseOfStudy'
                                        label='Course of study'
                                        labelStyle='form-label-gray'
                                        v-model="applicant.course"
                                        readonly
                                    />
                                    <formInput
                                        inputBoxStyle='col-md-6 '
                                        inputStyle='border-1 input-bg-white'
                                        type='text'
                                        identifier='dateOfBirth'
                                        label='Date of birth'
                                        labelStyle='form-label-gray'
                                        v-model="applicant.date_of_birth"
                                        readonly
                                    />
                                    <formInput
                                        inputBoxStyle='col-md-6 '
                                        inputStyle='border-1 input-bg-white'
                                        type='number'
                                        identifier='cgpa'
                                        label='CGPA'
                                        labelStyle='form-label-gray'
                                        v-model="applicant.cgpa"
                                        readonly
                                    />
                                    <div class="form-label col-md-6 col-12">
                                        <span class="form-label-gray">CV</span>
                                        <a :href='applicant.cv.secure_url' target="_blank" class="d-block text-decoration-none text-dark mt-2 pt-1">
                                            {{ applicant.cv.original_filename }}.{{ applicant.cv.format }}
                                        </a>
                                    </div>
                                </form>
                                <div class="mt-3">
                                    <button type="button" class="btn btn-login-purple" data-bs-toggle="modal" data-bs-target="#exampleModal">Approve</button>
                                    <button type="button" class="btn btn-login-decline ms-4" data-bs-toggle="modal" data-bs-target="#exampleModal2">Decline</button>
                                </div>
                            </div>
                        </div> -->
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
            response.map(item => {
                const dob = DateTime.fromISO(item.date_of_birth).toFormat('dd/MM/yyyy')
                const floatingAge = Math.abs(DateTime.fromISO(item.date_of_birth).diffNow(['years']).toObject().years)
                const age = Math.floor(floatingAge)
                item.date_of_birth = dob
                item.age = age
            })
            this.applicants = response
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
