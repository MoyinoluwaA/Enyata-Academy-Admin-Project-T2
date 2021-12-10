<template>
    <div class="dashboard-container">
        <h2 class="dashboard-header">Compose Assessment</h2>

        <p class="mt-5 fw-bold">{{ currentQuestion }}/{{ questions }}</p>

        <form class="d-flex flex-column">
            <label class="compose-file-choose col-md-6 col-12 text-center mt-4">
				<input class="compose-file-input" type="file" accept="image/*" @change="uploadFile($event)" name="imageUpload" />
                <span v-if='imageUpload' class="compose-file-text">Question Image Uploaded</span>
                <span v-else class="compose-file-text">+ Choose file</span>
			</label>

            <div class="form-group mt-4">
                <label for="exampleFormControlTextarea1 compose-head fw-normal">Questions</label>
                <textarea class="form-control compose-questions mt-1 mb-4" rows="4" v-model='assessmentQuestion.question'>
                </textarea>
            </div>

            <div class="compose-options-wrapper mt-4 row">
                <InputBox
                    inputBoxStyle='col-sm-6 pe-sm-4'
                    :inputStyle="{'compose-options-answer': assessmentQuestion.answer === 'a'}"
                    type='text'
                    identifier='A'
                    label='Option A'
                    labelStyle='compose-head'
                    v-model.lazy.trim="assessmentQuestion.options.a"
                />

                <InputBox
                    inputBoxStyle='col-sm-6 ps-sm-4'
                    :inputStyle="{'compose-options-answer': assessmentQuestion.answer === 'b'}"
                    type='text'
                    identifier='B'
                    label='Option B'
                    labelStyle='compose-head'
                    v-model.lazy.trim="assessmentQuestion.options.b"
                />

                <InputBox
                    inputBoxStyle='col-sm-6 pe-sm-4'
                    :inputStyle="{'compose-options-answer': assessmentQuestion.answer === 'c'}"
                    type='text'
                    identifier='C'
                    label='Option C'
                    labelStyle='compose-head'
                    v-model.lazy.trim="assessmentQuestion.options.c"
                />

                <InputBox
                    inputBoxStyle='col-sm-6 ps-sm-4'
                    :inputStyle="{'compose-options-answer': assessmentQuestion.answer === 'd'}"
                    type='text'
                    identifier='D'
                    label='Option D'
                    labelStyle='compose-head'
                    v-model.lazy.trim="assessmentQuestion.options.d"
                />

                <div class="text-center mt-3">
                    <p>Select Correct Answer</p>
                    <select name="correctAnswer" class="form-control form-select mx-auto" v-model="assessmentQuestion.answer">
                        <option value="a">A</option>
                        <option value="b">B</option>
                        <option value="c">C</option>
                        <option value="d">D</option>
                    </select>
                </div>
            </div>

            <div class="compose-btn d-flex justify-content-around">
                <Button btnText="Previous" btnStyle="btn-prev" @click.native="prev" :disabled='prevDisabled' />
                <Button btnText="Next" btnStyle="btn-next" @click.native="next" :disabled='disableNext || nextDisabled' />
            </div>

            <div class="mx-auto mb-4">
                <Button btnText="Finish" btnStyle="btn-finish text-center" data-bs-toggle="modal" data-bs-target="#exampleModal" />
            </div>
        </form>

        <Modal id='exampleModal' @click="createAssessment()" modalText='Are you sure you have finished composing assessment?' />
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
import InputBox from '@/components/Input.vue'
import Modal from '@/components/Modal.vue'
import AssessmentService from '@/services/assessment'
import UploadService from '@/services/upload'

export default {
    name: 'ComposeAssessment',
    components: {
        Button,
        InputBox,
        Modal
    },
    data() {
        return {
            assessmentQuestion: {
                question: '',
                options: {
                    a: '',
                    b: '',
                    c: '',
                    d: ''
                },
                answer: '',
                image: {}
            },
            currentQuestion: 1,
            questions: 0,
            time: 0,
            start_date: '',
            end_date: '',
            prevDisabled: true,
            nextDisabled: false,
            assessmentTest: [],
            imageUpload: false,
            fileUploadError: false
        }
    },
    mounted() {
        const { questions, time, start_date, end_date } = this.$route.query
        this.questions = Number(questions)
        this.time = Number(time)
        this.start_date = start_date,
        this.end_date = end_date
    },
    computed: {
        disableNext() {
            if (this.assessmentQuestion.question === '' || this.assessmentQuestion.options.a === '' ||
                this.assessmentQuestion.options.b === '' || this.assessmentQuestion.options.c === '' ||
                this.assessmentQuestion.options.d === '' || this.assessmentQuestion.answer === ''
            ) {
                return true
            }
            return false
        }
    },
    methods: {
        async uploadFile(event) {
            const { files } = event.target
            let formData = new FormData()
            formData.append('file', files[0])

            try {
                const response = await UploadService.fileUpload(formData)
                this.assessmentQuestion.image = response.data
                this.imageUpload = true
            } catch (error) {
                this.fileUploadError = true
                if (error.response.status === 400) {
                    this.$dtoast.pop({
                        preset: "error",
                        heading: "Error Uploading Image",
                        content: "Error occured while uploading, kindly check the image size"
                    })
                }
            }
        },
        prev() {
            if (this.currentQuestion === 2) {
                this.prevDisabled = true
            } 
            if (this.currentQuestion > 1) {
                this.currentQuestion--
                this.nextDisabled = false
            }

            this.assessmentTest[this.currentQuestion ] = this.assessmentQuestion
            if (this.assessmentTest[this.currentQuestion - 1 ]) {
                this.assessmentQuestion = this.assessmentTest[this.currentQuestion - 1]
            } else {
                this.clearAssessmentQuestion()
            }
        },
        next() {
            if (this.currentQuestion < this.questions) {
                this.currentQuestion++
                this.prevDisabled = false
            } 
            if (this.currentQuestion === this.questions) {
                this.nextDisabled = true
            }

            this.assessmentTest[this.currentQuestion - 2 ] = this.assessmentQuestion
            if (this.assessmentTest[this.currentQuestion -1 ]) {
                this.assessmentQuestion = this.assessmentTest[this.currentQuestion - 1]
            } else {
                this.clearAssessmentQuestion()
            }
        },
        clearAssessmentQuestion() {
            this.assessmentQuestion = {
                question: '',
                options: {
                    a: '',
                    b: '',
                    c: '',
                    d: ''
                },
                answer: ''
            }
        },
        async createAssessment() {
            try {
                const response = await AssessmentService.createAssessment(1, { 
                    assessment_test: this.assessmentTest,
                    time_allotted: this.time,
                    start_date: this.start_date,
                    closing_date: this.end_date
                })

                if (response.code === 200) {
                    this.$dtoast.pop({
                        preset: "success",
                        heading: 'Success',
                        content: 'Assessment for batch was created successfully'
                    })

                    this.$router.push({ name: 'Dashboard' })
                }
            } catch (error) {
                if (error.response.status === 400) {
                    this.$dtoast.pop({
                        preset: "error",
                        heading: 'Error occured',
                        content: 'Assessment for this batch already exists'
                    })
                }

                this.$router.push({ name: 'Dashboard' })
            }
        }
    }
}
</script>
