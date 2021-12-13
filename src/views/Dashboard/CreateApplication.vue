<template>
    <div class='container create-app mb-5'>
        <h2 class="dashboard-header ps-2">Create Application</h2>
        <div class="container content">
            <form class='row gx-5 justify-content-center' @submit.prevent='createApplications()'>
                <formInput
                    inputBoxStyle='col-md-6'
                    :inputStyle='isError.start_date'
                    type='date'
                    identifier='date'
                    labelStyle='form-label-dark'
                    label='Application start date'
                    v-model="admin.start_date"
                />
                <formInput
                    inputBoxStyle='col-md-6'
                    :inputStyle='isError.closing_date'
                    type='date'
                    identifier='date'
                    labelStyle='form-label-dark'
                    label='Application closure date'
                    v-model="admin.closing_date"
                />        
                <formInput
                    inputBoxStyle='col-md-6 link-input'
                    :inputStyle='isError.application_link'
                    type='text'
                    identifier='text'
                    labelStyle='form-label-dark'
                    label='Link'
                    v-model="admin.application_link"
                    @input="admin.application_link.match(linkRegex) 
                        ? isError.application_link= 'is-valid' 
                        : isError.application_link = 'is-invalid'"
                    invalidMsg='Enter a valid link format'
                />
                <formInput
                    inputBoxStyle='col-md-6'
                    :inputStyle='isError.batch_id'
                    type='number'
                    identifier='number'
                    label='Batch Id'
                    v-model='admin.batch_id'
                    invalidMsg='This field cannot be empty'
                />
                
                <div class="form-group mt-2 pt-1">
                    <label for="exampleFormControlTextarea1 compose-head fw-normal">Instructions</label>
                    <textarea class="form-control compose-questions mt-1" rows="3" v-model='admin.instructions'></textarea>
                </div>

                <div class="row justify-content-center">
                    <div class="row col-md-6 col-sm-12 mt-3">
                        <button class="btn btn-login-purple mt-4" type="submit" :disabled='isDisabled'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import formInput from '@/components/InputApplication.vue'
import {linkRegex, dateRegex } from '@/helpers/variables'
import ApplicationService from '@/services/application'
import { mapActions } from 'vuex'

export default {
    name: 'SignIn',
	components: {
            formInput,
	},
    data() {
        return {
            admin: {
                batch_id:'',
                start_date:'',
                closing_date:'',
                application_link:'',
                instructions:''
            },
            isError: {},
            linkRegex,
            dateRegex
        }
     },
     computed: {
        isDisabled () {
            return (
                (!(this.admin.batch_id && this.admin.start_date && this.admin.closing_date && this.admin.application_link && this.admin.instructions)) ||
                this.isError.batch_id === 'is-invalid' ||
                this.isError.start_date === 'is-invalid' ||
                this.isError.closing_date === 'is-invalid' ||
                this.isError.application_link === 'is-invalid' ||
                this.isError.instructions === 'is-invalid'
            )
        }
    },
    methods: {
        ...mapActions(['handleLogOut']),
        async createApplications() {
            try {
                const {...admin}= this.admin
                const response = await ApplicationService.createApplication(admin)
                
                if (response.code === 201){
                    this.$dtoast.pop({
                        preset: "success",
                        heading: 'Success',
                        content: 'Application has been successfully created'
                    })
                    // this.$router.push({ name: 'create-assessment' })
                } 
                this.clearForm()
            } catch (error) {
                if (error.response.data.code === 401) {
                    this.handleLogOut()
                    this.$router.push({ name: 'SignIn' })
                } else {
                    this.$dtoast.pop({
                        preset: "error",
                        heading: 'Error',
                        content: 'Error ocurred while application was created!'
                    })
                }
                this.clearForm()
            }
        },
        clearForm() {
            return (
                this.admin.batch_id = '',
                this.admin.start_date = '',
                this.admin.closing_date = '',
                this.admin.application_link= '',
                this.admin.instructions= '',
                this.isError={}
            )
        }
    }
}
</script>
