<template>
    <div class="m-5">
        <h2 class="pt-5">Set assessment test for batch {{ batch_id }}</h2>

        Before creating assesssment, check if assessment for the batch already exists

        <div class="my-5 text-center">
            <Button v-if='assessment' btnText='Check Assessment Exists' btnStyle='btn--gray mt-2' 
                @click.native="checkAssessment"
            />
            <p v-else>Assessment for Batch {{ batch_id }} already exists</p>
        </div>
    </div>
</template>

<script>
import AssessmentService from '@/services/assessment'
import Button from '@/components/Button'

export default {
    name: 'CreateAssessment',
    components: {
        Button
    },
    data() {
        return {
            assessment: true,
            batch_id: 2
        }
    },
    methods: {
        async checkAssessment() {
            try {
                const response = await AssessmentService.checkAssessmentExist(1)
                if (response.code === 200) {
                    this.$router.push({ name: 'create-assessment' })
                }
            } catch (error) {
                if (error.response.status === 400) {
                    this.$router.push({ name: 'create-assessment' })
                    // this.assessment = false
                }
            }
        }
    }
}
</script>
