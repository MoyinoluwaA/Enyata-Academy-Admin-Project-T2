<template>
    <div class="dashboard-container">
        <h2 class="dashboard-header">Compose Assessment</h2>

        <p class="mt-5 fw-bold">15/30</p>

        <form class="d-flex flex-column">
            <label class="compose-file-choose col-md-6 col-12 text-center mt-4">
                <input class="compose-file-input" type="file" /> 
                <span class="compose-file-text">+ Choose file</span>
            </label>

            <div class="form-group mt-4">
                <label for="exampleFormControlTextarea1 compose-head fw-normal">Questions</label>
                <textarea class="form-control compose-questions mt-1 mb-4" rows="4"></textarea>
            </div>

            <div class="compose-options-wrapper mt-4 row">
                <div class="compose-options-field col-6 pe-4">
                    <p class="compose-head fw-normal">Option A</p>
                    <div class="compose-options-space"> </div>
                </div>

                <div class="compose-options-field col-6 ps-4">
                    <p class="compose-head fw-normal">Option B</p>
                    <div class="compose-options-space-answer"></div>
                </div>

                <div class="compose-options-field mt-4 col-6 pe-4">
                    <p class="compose-head fw-normal">Option C</p>
                    <div class="compose-options-space"> </div>
                </div>

                <div class="compose-options-field mt-4 col-6 ps-4">
                    <p class="compose-head fw-normal">Option D</p>
                    <div class="compose-options-space"> </div>
                </div>
            </div>

            <div class="compose-btn d-flex justify-content-around">
                <Button btnText="Previous" btnStyle="btn-prev" />
                <Button btnText="Next" btnStyle="btn-next" />
            </div>
            <div class="mx-auto mb-4">
                <Button btnText="Finish" btnStyle="btn-finish text-center" />
            </div>
        </form>

    </div>
</template>

<script>
import Button from '../../components/Button.vue'
export default {
    components: {
        Button
    }
}
</script>
