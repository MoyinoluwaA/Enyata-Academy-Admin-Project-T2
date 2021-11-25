<template>
    <div>
        <Sidebar />
        <router-view />
    </div>
</template>

<script>
import Sidebar from '@/components/SideBar.vue'

export default {
    name: 'Dashboard',
    components: {
        Sidebar
    }
}
</script>
