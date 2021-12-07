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
                            <td class="table-col p-3">{{ applicant.name }}</td>
                            <td class="table-col p-3">{{ applicant.email }}</td>
                            <td class="table-col p-3">{{ applicant.dob }}</td>
                            <td class="table-col p-3">{{ applicant.address }}</td>
                            <td class="table-col p-3">{{ applicant.university }}</td>
                            <td class="table-col p-3">{{ applicant.cgpa }}</td>
                            <td class="table-col p-3">{{ applicant.scores }}</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
    </div>
</template>

<script>

export default {
    name: 'Result',
    data() {
        return {
            applicants: [
                {
                    name: 'Ify Chinke',
                    email: 'ify@enyata.com',
                    dob: '12/09/19 - 22',
                    address: '3 Sabo Ave, Yaba, Lagos',
                    university: 'University of Nigeria',
                    cgpa: '5.0',
                    scores: '15'
                },
                {
                    name: 'Ify Chinke',
                    email: 'ify@enyata.com',
                    dob: '12/09/19 - 22',
                    address: '3 Sabo Ave, Yaba, Lagos',
                    university: 'University of Nigeria',
                    cgpa: '5.0',
                    scores: '15'
                },
                {
                    name: 'Ify Chinke',
                    email: 'ify@enyata.com',
                    dob: '12/09/19 - 22',
                    address: '3 Sabo Ave, Yaba, Lagos',
                    university: 'University of Nigeria',
                    cgpa: '5.0',
                    scores: '15'
                }
            ]
        }
    }
}
</script>
