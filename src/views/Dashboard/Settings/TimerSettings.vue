<template>
    <div class="text-md-start text-center">
        <div class="settings-profile-header">
            <p class="fw-bold text-md-start text-center mt-3">Timer Setting</p>
        </div>

        <div class="settings-set-timer">
            <p>Set Time</p>
            
  
            <p class="timer"><span class="settings-timer">00</span><span class="settings-min">min</span><span class="settings-timer">000</span><span class="settings-min">sec</span>  </p>

            <Button btnStyle="btn-save" btnText="Save" />
        </div>
    </div>
</template>

<script>
import Button from "../../../components/Button.vue"

export default {
    components: {
        Button
    }
}
</script>