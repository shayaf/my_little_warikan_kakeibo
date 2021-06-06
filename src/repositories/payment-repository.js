import Repository from '@/repositories/Repository'

const resource = '/payment'


export default {
    getAll(projectId) {
        return Repository.get(`${resource}?project_id=` + projectId);
    },
}
