<template>
      <div class="dashboard-container">
            <select class="form-select form-select-lg dashboard-header result-header" aria-label=".form-select-lg example">
                <option value="1" >Results - Batch 1</option>
                <option selected class="">Results - Batch 2</option>
                <option value="3">Results - Batch 3</option>
            </select>
            <p class="settings-sub-header mb-4">Comprises of all that applied for batch 2</p>

            <div class="result-wrapper">
                <table class="table-wrapper text-center">
                    <thead class="table-head">
                        <tr>
                            <th class="table-col p-3">Name</th>
                            <th class="table-col p-3">Email</th>
                            <th class="table-col p-3">Dob - Age 
                                <img class="table-sorting ms-3" src="@/assets/icons/sorting.svg" alt="sort" />
                            </th>
                            <th class="table-col p-3">Address</th>
                            <th class="table-col p-3">University</th>
                            <th class="table-col p-3">CGPA 
                                <img class="table-sorting ms-3" src="@/assets/icons/sorting.svg" alt="sort" />
                            </th>
                            <th class="table-col p-3">Test Scores 
                                <img class="table-sorting ms-3" src="@/assets/icons/sorting.svg" alt="sort" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-data" v-for="applicant in applicants" :key="applicant.id">
                            <td class="table-col p-3">{{ applicant.first_name }} {{ applicant.last_name }}</td>
                            <td class="table-col p-3">{{ applicant.email }}</td>
                            <td class="table-col p-3">{{ applicant.date_of_birth }} - {{ applicant.age }}</td>
                            <td class="table-col p-3">{{ applicant.address }}</td>
                            <td class="table-col p-3">{{ applicant.university }}</td>
                            <td class="table-col p-3">{{ applicant.cgpa }}</td>
                            <td class="table-col p-3">{{ applicant.assessment_score }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>

<script>

import ApplicationService from '@/services/application'
import { DateTime } from 'luxon'

export default {
    name: 'Result',
    data() {
        return {
            applicants: [],
            batchId: 1
        }
    },
    async mounted() {
        try {
            const res = await ApplicationService.getApplicantByBatch(this.batchId)

            if (res.length === 0) {
                return
            } else {
                res.map(item => {
                    const date_of_birth = DateTime.fromISO(item.date_of_birth).toFormat('dd/MM/yyyy')
                    const floatingAge = Math.abs(DateTime.fromISO(item.date_of_birth).diffNow(['years']).toObject().years)
                    const age = Math.floor(floatingAge)
                    item.date_of_birth = date_of_birth
                    item.age = age
                    item.cgpa = Number(item.cgpa).toFixed(2)
                })
                this.applicants = res
            }
                
            } catch (error) {
                this.error = true
            }
    }
}
</script>
