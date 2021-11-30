<template>
        <div class="dashboard-container">
            <select class="form-select form-select-lg dashboard-header result-header" aria-label=".form-select-lg example">
                <option value="1" >Entries - Batch 1</option>
                <option selected class="">Entries - Batch 2</option>
                <option value="3">Entries - Batch 3</option>
            </select>
            <p class="settings-sub-header mb-4">Comprises of all that applied for batch 2</p>

            <div class="result-wrapper px-2">
                <table class="table-wrapper text-center mb-4">
                    <thead class="table-head">
                        <tr>
                            <th class="table-col p-3">Name</th>
                            <th class="table-col p-3">Email</th>
                            <th class="table-col p-3">Dob - Age 
                                <img class="table-sorting ms-3" src="../../../src/assets/icons/sorting.svg" alt="sort" />
                            </th>
                            <th class="table-col p-3">Address</th>
                            <th class="table-col p-3">University</th>
                            <th class="table-col p-3">CGPA 
                                <img class="table-sorting ms-3" src="../../../src/assets/icons/sorting.svg" alt="sort" />
                            </th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr class="table-data mt-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" v-for="applicant in applicants" :key="applicant.id">
                            <td class="table-col p-3 mb-2">{{ applicant.name }}</td>
                            <td class="table-col p-3 mb-2">{{ applicant.email }}</td>
                            <td class="table-col p-3 mb-2">{{ applicant.dob }}</td>
                            <td class="table-col p-3 mb-2">{{ applicant.address }}</td>
                            <td class="table-col p-3 mb-2">{{ applicant.university }}</td>
                            <td class="table-col p-3 mb-2">{{ applicant.cgpa }}</td>
                        </tr>
                        <div class="offcanvas offcanvas-end p-4" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                <div class="text-start mt-4">
                                    <img src='../../assets/images/offcanvasImg.png' alt='applicant-Image'>
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
                                            v-model="applicants.name"
                                        />
                                        <formInput
                                            inputBoxStyle='col-md-6 '
                                            inputStyle='border-1 input-bg-white'
                                            type='email'
                                            identifier='email'
                                            label='Email'
                                            labelStyle='form-label-gray'
                                            v-model="applicants.email"
                                        />
                                        <formInput
                                            inputBoxStyle='col-md-6 '
                                            inputStyle='border-1 input-bg-white'
                                            type='text'
                                            identifier='address'
                                            label='Address'
                                            labelStyle='form-label-gray'
                                            v-model="applicants.address"
                                        />
                                        <formInput
                                            inputBoxStyle='col-md-6 '
                                            inputStyle='border-1 input-bg-white'
                                            type='text'
                                            identifier='university'
                                            label='University'
                                            labelStyle='form-label-gray'
                                            v-model="applicants.university"
                                        />
                                        <formInput
                                            inputBoxStyle='col-md-6 '
                                            inputStyle='border-1 input-bg-white'
                                            type='text'
                                            identifier='courseOfStudy'
                                            label='Course of study'
                                            labelStyle='form-label-gray'
                                            v-model="applicants.courseOfStudy"
                                        />
                                        <formInput
                                            inputBoxStyle='col-md-6 '
                                            inputStyle='border-1 input-bg-white'
                                            type='date'
                                            identifier='dateOfBirth'
                                            label='Date of birth'
                                            labelStyle='form-label-gray'
                                            v-model="applicants.dob"
                                        />
                                        <formInput
                                            inputBoxStyle='col-md-6 '
                                            inputStyle='border-1 input-bg-white'
                                            type='number'
                                            identifier='cgpa'
                                            label='CGPA'
                                            labelStyle='form-label-gray'
                                            v-model="applicants.cgpa"
                                        />
                                        <label for="formFile" class="form-label col-md-6 col-12">
                                        <p><span class="form-label-gray">CV</span><br><span class="text-center">+ Choose file</span></p></label>
                                        <input class="form-control compose-file-input" type="file" id="formFile">
                                    </form>
                                    <div class="mt-3">
                                        <button type="button" class="btn btn-login-purple" data-bs-toggle="modal" data-bs-target="#exampleModal">Approve</button>
                                        <button type="button" class="btn btn-login-decline ms-4" data-bs-toggle="modal" data-bs-target="#exampleModal2">Decline</button>
                                    </div>
                                </div>
                        </div>
                    </tbody>
                </table>
            </div>
            <ApproveModal/>
            <DeclineModal/>
        </div>
</template>

<script>
import formInput from '@/components/Input.vue'
import ApproveModal from '../../components/ApproveModal.vue'
import DeclineModal from '../../components/DeclineModal.vue'



export default {
    components: {
        formInput,
        ApproveModal,
        DeclineModal
    }, 
    data() {
        return {
            applicants: [
                {
                    name: 'Ify Chinke',
                    email: 'ify@enyata.com',
                    dob: '12/09/19 - 22',
                    address: '3 Sabo Ave, Yaba, Lagos',
                    university: 'University of Nigeria',
                    courseOfStudy:'',
                    cgpa: '5.0',
                },
                {
                    name: 'Ify Chinke',
                    email: 'ify@enyata.com',
                    dob: '12/09/19 - 22',
                    address: '3 Sabo Ave, Yaba, Lagos',
                    university: 'University of Nigeria',
                    courseOfStudy:'',
                    cgpa: '5.0',
                },
                {
                    name: 'Ify Chinke',
                    email: 'ify@enyata.com',
                    dob: '12/09/19 - 22',
                    address: '3 Sabo Ave, Yaba, Lagos',
                    university: 'University of Nigeria',
                    courseOfStudy:'',
                    cgpa: '5.0',
                }
            ]
        }
    }
}
</script>
