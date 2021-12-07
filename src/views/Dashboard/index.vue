<template>
    <div>
        <SideBar :name='name' :email='email' />
        <div class="dashboard-main">    
            <router-view />
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import AuthService from '@/services/auth'

export default {
    name: 'Dashboard',
    components: {
        SideBar
    },
    data() {
        return {
            name: '',
            email: ''
        }
    },
    async mounted() {
       try {
           const response = await AuthService.getAdminDetails()
           this.name = response.first_name + ' ' + response.last_name
           this.email = response.email
       } catch (error) {
           console.log(error)
       }
    }
}
</script>
