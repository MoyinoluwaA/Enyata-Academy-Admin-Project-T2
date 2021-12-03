<template>
    <div class='sign-in d-flex align-items-center'>
        <section class="container signInBody">
                <div class="form-container-head pt-3 pt-md-5 text-center">
                    <img src='../assets/images/enyataLogo.svg' alt="enyata-logo" class="enyata-logo" />
                    <h4 class="text-center fst-italic mt-4 mb-4 pb-3 text-white">Admin Log In</h4>
                </div>
                <form class="action" @submit.prevent="signIn()">
                    <loginInput
                        inputBoxStyle='col-md-6 offset-md-3'
                        :inputStyle="isError.email"
                        type='email'
                        identifier='email'
                        label='Email Address'
                        labelStyle='form-label-white'
                        v-model.lazy.trim="admin.email"
                        @input="admin.email.match(emailRegex) 
                            ? isError.email = 'is-valid' 
                            : isError.email = 'is-invalid'"
                        invalidMsg='Enter a valid email address'
                    />
                    <loginInput
                        inputBoxStyle='col-md-6 offset-md-3'
                        :inputStyle="isError.password"
                        type='password'
                        identifier='password'
                        labelStyle='form-label-white'
                        label='Password'
                        v-model.lazy.trim="admin.password"
                        @input="admin.password.match(passwordRegex) 
                            ? isError.password = 'is-valid' 
                            : isError.password = 'is-invalid'"
                        invalidMsg='Password should contain an uppercase, lowercase and digit'
                    />
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <button class="btn col-md-6 col-12 btn-login mt-3" id="submit-btn" type="submit" :disabled='isDisabled'>Sign In</button>
                    </div>
                </form>
        </section>
        <section>
            <img src='../assets/images/Group.svg' alt="login_img" class="loginImage" />
        </section>
    </div> 
</template>

<script>
import loginInput from '@/components/LoginInput.vue'
import { emailRegex, passwordRegex } from '@/helpers/variables'
import AuthService from '@/services/auth'
import { mapActions } from 'vuex'

export default {
	components: {
        loginInput,
	},
     data() {
        return {
            admin: {
                email: '',
                password: '',
            },
            isError:{},
            emailRegex,
            passwordRegex
        }
     },
     computed: {
        isDisabled() {
            return (
                (!(this.admin.email && this.admin.password)) ||
                this.isError.email === 'is-invalid' ||
                this.isError.password === 'is-invalid'
            )
        }
    },
    methods: {
        ...mapActions(['handleLogIn']),
        async signIn() {
            try {
                const res = await AuthService.loginAdmin({...this.admin})
                if (res.code === 200) {
                    this.handleLogIn(res.data.token)
                    this.$router.push({ name: 'Dashboard' })
                    this.clearForm()
                }
            }catch(error) {
                 if (error.response.data.code === 401) {
                    let content
                    if (error.response.data.message === 'Invalid credentials') {
                        content = 'Invalid Credentials'
                    } else {
                        content = 'Admin not verified'
                    }
                    this.$dtoast.pop({
                        preset: "error",
                        heading: 'Error occured while logging in',
                        content
                    })
                }
                // this.clearForm()
             }
         }, 
         clearForm() {
             this.admin.email= '',
             this.admin.password= '',
             this.isError= {}
         }
     }
}
</script>