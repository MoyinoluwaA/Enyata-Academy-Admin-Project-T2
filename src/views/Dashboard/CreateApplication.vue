<template>
    <div class='container create-app'>
        <h2 class="dashboard-header ps-2">Create Application</h2>
        <div class="container content">
            <form class='row align-items-center gx-5'>
                <label class=" col-md-6 col-12 compose-file-choose file-choose-height text-center mb-4">
                    <input class="compose-file-input" type="file" /> 
                    <span class="compose-file-text">+ Choose file</span>
                </label>
                <formInput
                    inputBoxStyle='col-md-6 link-input'
                    inputStyle='bg-white text-black input-bg-white'
                    type='text'
                    identifier='text'
                    labelStyle='form-label-dark'
                    label='Link'
                    v-model="admin.link"
                />
            </form>
            <form class='row gx-5 justify-content-center'>
                <formInput
                    inputBoxStyle='col-md-6'
                    inputStyle='bg-white text-black input-bg-white'
                    type='email'
                    identifier='email'
                    labelStyle='form-label-dark'
                    label='Application closure date'
                    v-model="admin.date"
                />
                <formInput
                    inputBoxStyle='col-md-6'
                    inputStyle='bg-white text-black input-bg-white'
                    type='email'
                    identifier='email'
                    label='Batch Id'
                    v-model='admin.id'
                />
            </form>
            <div class="form-group mt-4">
                <label for="exampleFormControlTextarea1 compose-head fw-normal">Instructions</label>
                <textarea class="form-control compose-questions mt-1" rows="3"></textarea>
            </div>
            <div class="row justify-content-center">
                <div class=" row btn col-md-6 col-sm-12 mt-3">
                    <button class="btn btn-login-purple mt-4" type="submit">Submit</button>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import formInput from '@/components/Input.vue'

export default {
    name: 'SignIn',
	components: {
            formInput,
	},
     data() {
        return {
            admin: {
                link:'',
                date:'',
                id:'',

            }
        }
     }
}
</script>