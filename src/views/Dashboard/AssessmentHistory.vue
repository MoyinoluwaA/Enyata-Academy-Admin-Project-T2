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
                            <td class="table-col p-3">{{ assessmentHistory.batch }}</td>
                            <td class="table-col p-3">{{ assessmentHistory.dateComposed }}</td>
                            <td class="table-col p-3">{{ assessmentHistory.nosQuestions }}</td>
                            <td class="table-col p-3">{{ assessmentHistory.time }}</td>
                            <td class="table-col p-3">{{ assessmentHistory.status }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>

<script>

export default {
    name: 'AssessmentHistory',
    data() {
        return {
            assessmentHistories: [
                {
                    batch: 'Batch 1',
                    dateComposed: '12/07/94',
                    nosQuestions: '30',
                    time: '30 mins',
                    status: 'Taken'
                },
                  {
                    batch: 'Batch 1',
                    dateComposed: '12/07/94',
                    nosQuestions: '30',
                    time: '30 mins',
                    status: 'Taken'
                },
                  {
                    batch: 'Batch 1',
                    dateComposed: '12/07/94',
                    nosQuestions: '30',
                    time: '30 mins',
                    status: 'Taken'
                },
                  {
                    batch: 'Batch 1',
                    dateComposed: '12/07/94',
                    nosQuestions: '30',
                    time: '30 mins',
                    status: 'Taken'
                },
                  {
                    batch: 'Batch 1',
                    dateComposed: '12/07/94',
                    nosQuestions: '30',
                    time: '30 mins',
                    status: 'Taken'
                },
                  {
                    batch: 'Batch 1',
                    dateComposed: '12/07/94',
                    nosQuestions: '30',
                    time: '30 mins',
                    status: 'Taken'
                },
                  {
                    batch: 'Batch 1',
                    dateComposed: '12/07/94',
                    nosQuestions: '30',
                    time: '30 mins',
                    status: 'Taken'
                },
                  {
                    batch: 'Batch 1',
                    dateComposed: '12/07/94',
                    nosQuestions: '30',
                    time: '30 mins',
                    status: 'Taken'
                },
                  {
                    batch: 'Batch 1',
                    dateComposed: '12/07/94',
                    nosQuestions: '30',
                    time: '30 mins',
                    status: 'Taken'
                },
                  {
                    batch: 'Batch 1',
                    dateComposed: '12/07/94',
                    nosQuestions: '30',
                    time: '30 mins',
                    status: 'Taken'
                },
                  {
                    batch: 'Batch 1',
                    dateComposed: '12/07/94',
                    nosQuestions: '30',
                    time: '30 mins',
                    status: 'Taken'
                },
                  {
                    batch: 'Batch 1',
                    dateComposed: '12/07/94',
                    nosQuestions: '30',
                    time: '30 mins',
                    status: 'Taken'
                },
            ]
        }
    }
}
</script>
