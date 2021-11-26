<template>
    <div>
        <SideBar />
        <div class="dashboard-main">    
            <router-view />
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'

export default {
    name: 'Dashboard',
    components: {
        SideBar
    }
}
</script>
