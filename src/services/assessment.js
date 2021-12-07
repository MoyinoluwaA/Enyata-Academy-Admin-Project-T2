import api from './access'

const AssessmentService = () => {
    const checkAssessmentExist = async batchId => {
        const response = await api.get(`/assessment/check/${batchId}`)
        return response.data
    }

    const createAssessment = async (batchId, payload) => {
        const response = await api.post(`assessment/create/${batchId}`, payload)
        return response.data
    }

    return {
        checkAssessmentExist,
        createAssessment
    }
}

export default AssessmentService()
