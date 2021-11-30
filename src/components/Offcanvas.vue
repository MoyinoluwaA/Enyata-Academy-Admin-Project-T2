<template>
    <section>
        <div class="offcanvas offcanvas-end p-4" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <div class="text-start mt-4">
                <img src='../assets/images/offcanvasImg.png' alt='applicant-Image'>
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
                        <p><span class="form-label-gray">CV</span><br><span class="text-center">+ Choose file</span></p>
                    </label>
                    <input class="form-control compose-file-input" type="file" id="formFile">
                </form>
                <div class="mt-3">
                    <button type="button" class="btn btn-login-purple" data-bs-toggle="modal" data-bs-target="#exampleModal">Approve</button>
                    <button type="button" class="btn btn-login-decline ms-4">Decline</button>
                </div>
            </div>
         </div>
    </section>
</template>

<script>
    import formInput from '@/components/Input.vue'

export default {
    name:'OffCanvas',
    components: {
        formInput
    }
}
</script>

<style>

</style>