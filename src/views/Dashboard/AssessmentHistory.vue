<template>
    <div class="dashboard-container">
		<h2 class="dashboard-header">Assessment History</h2>

		<div class="result-wrapper mb-5">
			<table class="table-wrapper text-center">
				<thead class="table-head">
					<tr>
						<th class="table-col p-3">Batch</th>
						<th class="table-col p-3">Date Composed</th>
						<th class="table-col p-3">No of Questions</th>
						<th class="table-col p-3">Time Allocated</th>
						<th class="table-col p-3">Status</th>
					</tr>
				</thead>
				<tbody class="table-body">
					<tr class="table-data" v-for="assessmentHistory in assessmentHistories" :key="assessmentHistory.id">
						<td class="p-3">{{ assessmentHistory.batch_id }}</td>
						<td class="p-3">{{ assessmentHistory.date_composed }}</td>
						<td class="p-3">{{ assessmentHistory.assessment_test.length }}</td>
						<td class="p-3">{{ assessmentHistory.time_allotted }}</td>
						<td class="p-3">{{ assessmentHistory.status }}</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
</template>

<script>
import AssessmentService from '@/services/assessment'
import { DateTime } from 'luxon'

export default {
    name: 'AssessmentHistory',
    data() {
        return {
            assessmentHistories: []
        }
    },
	async mounted() {
		try {
			const response = await AssessmentService.getAssessmentHistory()
			response.map(item => {
                item.date_composed = DateTime.fromISO(item.created_at).toFormat('dd/MM/yyyy')
            })
			this.assessmentHistories = response
		} catch (error) {
			this.$dtoast.pop({
				preset: "error",
				heading: 'Error occured',
				content: error.response.data.message
			})
		}
	}
}
</script>
