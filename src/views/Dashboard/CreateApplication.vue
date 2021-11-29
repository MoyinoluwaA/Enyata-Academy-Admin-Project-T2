<template>
    <div>
        <form>
            <label class="compose-file-choose col-md-6 col-12 text-center mt-4">
                <input class="compose-file-input" type="file" /> 
                <span class="compose-file-text">+ Choose file</span>
            </label>
            <formInput
                inputBoxStyle='col-md-6 offset-md-3'
                inputStyle='border-2 bg-white text-black'
                type='email'
                identifier='email'
                label='Email Address'
                v-model="admin.email"
            />
        </form>
        
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
                email: '',
                password: '',
            }
        }
     }
}
</script>