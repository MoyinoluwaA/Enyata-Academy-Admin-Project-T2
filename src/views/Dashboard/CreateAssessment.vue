<template>
    <div class="m-5">
        <h2 class="mb-4">Set assessment test for batch 1</h2>
        <p>Select how many questions would be in assessment</p>
        <select name="numberOfQuestions" class="form-control mb-4 form-select" v-model="numberOfQuestions">
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="45">45</option>
            <option value="60">60</option>
        </select>

        <p>Select time allotted for assessment in minutes</p>
        <select name="time" class="form-control form-select" v-model="time">
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
        </select>

        <InputBox
            inputBoxStyle='col-sm-6 pe-sm-4 ms-0 mt-4'
            inputStyle=''
            type='date'
            identifier='startDate'
            label='Select start date for assessment'
            labelStyle=''
            v-model.lazy.trim="start_date"
        />

        <InputBox
            inputBoxStyle='col-sm-6 pe-sm-4 ms-0'
            inputStyle=''
            type='date'
            :min='start_date'
            identifier='startDate'
            label='Select end date for assessment'
            labelStyle=''
            v-model.lazy.trim="end_date"
        />

        <div class="my-5 text-center">
            <Button btnText='Compose Assessment' btnStyle='btn-purple mt-2' 
                @click.native="composeAssessment" :disabled='validateInput'
            />
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
import InputBox from '@/components/Input.vue'

export default {
    name: 'CreateAssessment',
    components: {
        Button,
        InputBox
    },
    data() {
        return {
            numberOfQuestions: 0,
            time: 0,
            start_date: '',
            end_date: ''
        }
    },
    methods: {
        composeAssessment() {
            this.$router.push({ 
                name: 'compose-assessment', query: { 
                    questions: this.numberOfQuestions, 
                    time: this.time,
                    start_date: this.start_date,
                    end_date: this.end_date
                } 
            })
        },
    },
    computed: {
        validateInput() {
            if (this.numberOfQuestions === 0 || this.time === 0  || this.start_date === '' || this.end_date === '' ) {
                return true
            }
            return false
        }
    }
}
</script>
