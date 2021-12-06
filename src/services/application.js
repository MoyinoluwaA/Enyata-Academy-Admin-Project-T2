import api from './access'

const ApplicationService = () => {
    const getApplicantByBatch = async batchId => {
        const response = await api.get(`/applications/applicants/${batchId}`)
        return response.data
    }

    const updateApplicantStatus = async (applicantId, status) => {
        const response = await api.put(`/applications/applicants/${applicantId}`, {status})
        return response
    }

    const getApplicationStats = async () => {
        const response = await api.get('/applications/stats')
        return response
    }

    return {
        getApplicantByBatch,
        updateApplicantStatus,
        getApplicationStats
    }
}

export default ApplicationService()
