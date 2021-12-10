<template>
    <div class="col-12 form-input mb-4" :class="inputBoxStyle">
        <label :for="identifier" class="mb-3 form-label" :class="labelStyle">{{ label }}</label>
        <input :type="type" class="form-control" :class="inputStyle" :name="identifier" :min='min' :max='max' 
            :value="value" @input="$emit('input', $event.target.value)" :readonly="readonly"
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
        inputStyle: [String, Object],
        inputBoxStyle: String,
        formStyle: String,
        readonly: String,
        min: String,
        max: String,
        invalidMsg: String
    },
}
</script>
