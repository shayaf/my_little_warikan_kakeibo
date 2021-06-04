import Repository from './Repository'

const resource = '/payment'


export default {
    getAll(projectId) {
        return Repository.get(`${resource}?project=` + projectId);
    },

    get(paymentId) {
        return Repository.get(`${resource}/` + paymentId);
    },
    
}