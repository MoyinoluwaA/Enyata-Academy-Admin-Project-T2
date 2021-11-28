<template>
    <div>
        <Settings />

        <div class="dashboard-container">
            <router-view />
        </div>
    </div>
</template>

<script>
import Settings from './Settings.vue'
export default {
    name: 'SettingsHandler',
    components: {
        Settings
    }
}
</script>