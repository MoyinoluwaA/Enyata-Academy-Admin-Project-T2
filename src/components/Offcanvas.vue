<template>
     <div v-if='Object.entries(applicant).length > 0' class="offcanvas offcanvas-end p-4" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
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
    </div>
</template>

<script>
    import formInput from '@/components/Input.vue'

export default {
    name:'OffCanvas',
    components: {
        formInput
    },
    props: {
        applicant: Object
    }
}
</script>

<style>

</style>