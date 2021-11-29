<template>
    <div class='sign-in d-flex align-items-center'>
        <section class="container signInBody">
                <div class="form-container-head pt-3 pt-md-5 text-center">
                    <img src='../assets/images/enyataLogo.svg' alt="enyata-logo" class="enyata-logo" />
                    <h4 class="text-center fst-italic mt-4 mb-4 pb-3 text-white">Admin Log In</h4>
                </div>
                <form class="action">
                    <formInput
                        inputBoxStyle='col-md-6 offset-md-3'
                        inputStyle='border-2 border-white input-bg-purple'
                        type='email'
                        identifier='email'
                        label='Email Address'
                        labelStyle='form-label-white'
                        v-model="admin.email"
                    />
                    <formInput
                        inputBoxStyle='col-md-6 offset-md-3'
                        inputStyle='border-2 border-white input-bg-purple'
                        type='password'
                        identifier='password'
                        labelStyle='form-label-white'
                        label='Password'
                        v-model="admin.password"
                    />
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <button class="btn col-md-6 col-12 btn-login mt-3" id="submit-btn" type="submit">Sign In</button>
                    </div>
                </form>
        </section>
        <section>
            <img src='../assets/images/Group.svg' alt="login_img" class="loginImage" />
        </section>
    </div> 
</template>

<script>
import formInput from '@/components/Input.vue'

export default {
	components: {
            formInput,
	},
     data() {
        return {
            admin: {
                email: '',
                password: '',
            }
        }
     }
}
</script>