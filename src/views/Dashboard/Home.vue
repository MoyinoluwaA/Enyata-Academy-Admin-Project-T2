<template>
    <div class="dashboard-container">
        <h2 class="dashboard-header">Dashboard</h2>

        <div class="dashboard-data">
            <div class="dashboard-current-app-wrapper">
                <p class="dashboard-app-text">Current Applications</p>
                <h3 class="dashboard-app-no">233</h3>
                <img class="mt-0 p-0" src="../../assets/icons/current-level.svg" alt="current" />
                <p class="dashboard-academy-stage">Academy 2.0</p>
            </div>
            <div class="dashboard-total-app-wrapper">
                <p class="dashboard-app-text">Total Applications</p>
                <h3 class="dashboard-app-no">4253</h3>
                <img class="mt-0 p-0" src="../../assets/icons/total-level.svg" alt="current" />
                <p class="dashboard-academy-stage">All entries so far</p>
            </div>
            <div class="dashboard-academy-wrapper">
                <p class="dashboard-app-text">Current Applications</p>
                <h3 class="dashboard-app-no">233</h3>
                <img class="mt-0 p-0" src="../../assets/icons/so-far-level.svg" alt="current" />
                <p class="dashboard-academy-stage">So far</p>
            </div>
        </div>

        <div class="dashboard-information mb-5">
            <div class="">
                <p class="dashboard-history-text">History</p>
                <p class="dashboard-update-date">Last Update  <span>18:24, 22/02/19</span></p>

                <div class="dashboard-info-table">
                    <div class="d-flex flex-row">
                        <p class="me-4 mt-3 ms-4">Academy Batch 1</p>
                        <p class="me-4 mt-3 ms-4">15 students</p>
                        <p class="me-4 mt-3 ms-4">started 11/09/15</p>
                    </div>
                    <div class="dashboard-table-row d-flex flex-row">
                        <p class="me-4 mt-3 ms-4">Academy Batch 1</p>
                        <p class="me-4 mt-3 ms-4">15 students</p>
                        <p class="me-4 mt-3 ms-4">started 11/09/15</p>
                    </div>
                    <div class="dashboard-table-row d-flex flex-row">
                        <p class="me-4 mt-3 ms-4">Academy Batch 1</p>
                        <p class="me-4 mt-3 ms-4">15 students</p>
                        <p class="me-4 mt-3 ms-4">started 11/09/15</p>
                    </div>
                </div>
            </div>

            <div class="dashboard-create-assessment">
                    <p class="dashboard-create-text p-2 fw-bold fs-6">Create Assessment</p>
                    <div class="text-center mb-4">    
                        <p class="fs-6 fw-normal pe-5 ps-5 mt-5">Create test question for an incoming academy<br/> students</p>
                        <router-link :to="{ name: 'create-application' }">
                            <Button btnText='Create Assessment' btnStyle='btn--gray mt-2 mb-4' />
                        </router-link>
                    </div>
            </div>

        </div>
    </div>
</template>

<script>
import Button from "../../components/Button.vue"
export default {
    components: {
        Button
    }
}
</script>
