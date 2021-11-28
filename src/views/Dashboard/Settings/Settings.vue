<template>
    <div class="dashboard-container">
        <h2 class="dashboard-header">Profiles and Settings</h2>
        <p class="settings-sub-header">Helps you set admin profile and give other users permissions</p>

        <div class="btn-wrapper">
            <router-link class="settings-link" :to="{ name: 'admin-profile'}">
                <Button btnText='Admin Profile' btnStyle='btn-switch-setting' />
            </router-link>

            <router-link class="settings-link" :to="{ name: 'time-settings'}">
                <Button btnText='Timer Settings' btnStyle='btn-switch-setting' />
            </router-link>
        </div>
    </div>
</template>

<script>
import Button from "../../../components/Button.vue"
export default {
    name: 'Settings',
    components: {
        Button
    }
}
</script>
