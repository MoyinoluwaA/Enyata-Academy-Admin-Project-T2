<template>
    <div class="dashboard-container">
        <h2 class="dashboard-header">Dashboard</h2>
        <p v-if='loading' class="fw-bolder fs-4 mt-5">Fetching Application Stats...</p>
        <p v-else-if='error' class="fw-bold fs-3 mt-5">An Error occurred while fetching Application Stats</p>
        <div v-else class="dashboard-data">
            <div class="dashboard-current-app-wrapper">
                <p class="dashboard-app-text">Current Applications</p>
                <h3 class="dashboard-app-no">{{ total_applicants_in_batch }}</h3>
                <img class="mt-0 p-0" src="../../assets/icons/current-level.svg" alt="current" />
                <p class="dashboard-academy-stage">Academy {{ batches }}.0</p>
            </div>
            <div class="dashboard-total-app-wrapper">
                <p class="dashboard-app-text">Total Applications</p>
                <h3 class="dashboard-app-no">{{ total_applicants }}</h3>
                <img class="mt-0 p-0" src="../../assets/icons/total-level.svg" alt="current" />
                <p class="dashboard-academy-stage">All entries so far</p>
            </div>
            <div class="dashboard-academy-wrapper">
                <p class="dashboard-app-text">Academy's</p>
                <h3 class="dashboard-app-no">{{ batches }}</h3>
                <img class="mt-0 p-0" src="../../assets/icons/so-far-level.svg" alt="current" />
                <p class="dashboard-academy-stage">So far</p>
            </div>
        </div>

        <div class="dashboard-information mb-5">
            <div class="">
                <p class="dashboard-history-text text-md-start text-center">History</p>
                <p class="dashboard-update-date text-md-start text-center">Last Update  <span>{{ date }}</span></p>

                <div class="dashboard-info-table">
                    <div class="dashboard-table-row d-flex flex-row" v-for="application in applicationStats" :key="application.id">
                        <p class="dashboard-col me-4 mt-3 ms-4">Academy Batch {{ application.batch_id }} </p>
                        <p class="dashboard-col me-4 mt-3 ms-4">{{ application.student_count }} students</p>
                        <p class="dashboard-col me-4 mt-3 ms-4">started {{ application.start_date }}</p>
                    </div>
                </div>
            </div>

            <div class="dashboard-create-assessment py-3 px-4 mt-4 mt-lg-0">
                <p class="dashboard-create-text p-2 pb-0 fw-bold fs-6">Create Assessment</p>
                <div class="text-center mb-4 d-flex flex-column justify-content-center">    
                    <p class="fs-6 fw-normal px-3 px-xl-5 mt-5">Create test question for an incoming academy students</p>
                    <router-link :to="{ name: 'compose-assessment' }">
                        <Button btnText='Create Assessment' btnStyle='btn--gray mt-2' />
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Button from "../../components/Button.vue"
import ApplicationService from '@/services/application'
import { DateTime } from 'luxon'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            loading: true,
            error: false,
            date: '',
            applicationStats: []
        }
    },
    components: {
        Button
    },
    async mounted() {
        try {
            const response = await ApplicationService.getApplicationStats()

            if (response.code === 200) {
                this.loading = false

                const { total_applicants, total_applicants_in_batch, total_batches, applicationStats } = response.data
                applicationStats.map(applicant => {
                    applicant.batch_id = Number(applicant.batch_id)
                    applicant.start_date = DateTime.fromISO(applicant.start_date).toFormat('dd/MM/yy')
                })

                this.total_applicants = total_applicants
                this.total_applicants_in_batch = total_applicants_in_batch
                this.batches = total_batches
                this.saveBatch(this.batches)
                this.applicationStats = applicationStats
                this.date = DateTime.now().toFormat('hh:mm, dd/MM/yy')
            }
            
        } catch (error) {
            this.error = true
            this.loading = false
        }
    },
    methods: {
        ...mapActions(['saveBatch'])
    }
}
</script>
