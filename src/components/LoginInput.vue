<template>
    <div class="col-12 form-input mb-4" :class="inputBoxStyle">
        <label :for="identifier" class="mb-2 form-label" :class="labelStyle">{{label}}</label>
        <input :type="type" class="form-control border-2 border-white input-bg-purple" :class="inputStyle"  :name="identifier"
        :value="value" @input="$emit('input', $event.target.value)"  aria-describedby="inputGroupPrepend3 validationFeedback" />
        <span id="validationFeedback" class="invalid-feedback position-absolute">
            {{invalidMsg}}
        </span>
    </div>
</template>

<script>
export default {
    name: 'loginInput',
    props: {
        identifier: String,
        type: String,
        label: String,
        labelStyle: String,
        inputStyle: String,
        inputBoxStyle: String,
        formStyle: String,
        invalidMsg: String
    },
}
</script>