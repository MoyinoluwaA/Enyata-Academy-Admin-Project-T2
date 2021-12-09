<template>
    <div class="col-12 form-input mb-4" :class="inputBoxStyle">
<<<<<<< HEAD
        <label :for="identifier" class="mb-2 form-label" :class="labelStyle">{{ label }}</label>
        <input :type="type" class="form-control" :class="inputStyle" :name="identifier" 
            :value="value" @input="$emit('input', $event.target.value)" aria-describedby="inputGroupPrepend3 validationFeedback" :readonly="readonly"
=======
        <label :for="identifier" class="mb-3 form-label" :class="labelStyle">{{ label }}</label>
        <input :type="type" class="form-control" :class="inputStyle" :name="identifier" :min='min'
            :value="value" @input="$emit('input', $event.target.value)" :readonly="readonly"
>>>>>>> 3858b0854d274809847faa20e109d006faa635ab
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
        min: String
    },
}
</script>
