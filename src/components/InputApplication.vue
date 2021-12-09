<template>
    <div class="col-12 form-input mb-4" :class="inputBoxStyle">
        <label :for="identifier" class="mb-2 form-label" :class="labelStyle">{{ label }}</label>
        <input :type="type" class="form-control bg-white text-black input-bg-white" :class="inputStyle" :name="identifier" 
            :value="value" @input="$emit('input', $event.target.value)" aria-describedby="inputGroupPrepend3 validationFeedback" :readonly="readonly"
        />
        <span id="validationFeedback" class="invalid-feedback">
            {{invalidMsg}}
        </span>
    </div>
</template>

<script>
export default {
    name: 'formInput',
    props: {
        identifier: String,
        type: String,
        value: String,
        label: String,
        labelStyle: String,
        inputStyle: String,
        inputBoxStyle: String,
        formStyle: String,
        readonly: String,
        invalidMsg: String,
    },
}
</script>
