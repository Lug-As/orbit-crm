import axios from 'axios'

const ProjectsPath = 'projects'

export default {
	async fetchProject(id) {
		return axios.get(ProjectsPath + '/' + encodeURI(id))
	},
	async fetchProjects(page = 1, params = {}) {
		for (let key in params) {
			if (Array.isArray(params[key])) {
				params[key] = params[key].join(',')
			}
		}
		return axios.get(ProjectsPath, {
			params: {
				...params,
				page: encodeURI(String(parseInt(page))),
			},
		})
	},
	async fetchUserProjects(page = 1) {
		return axios.get(ProjectsPath + '/own', {
			params: {
				page: encodeURI(String(parseInt(page))),
			},
		})
	},
	async deleteProject(id) {
		return axios.delete(ProjectsPath + '/' + encodeURI(id))
	},
	async createProject(project) {
		return axios.post(ProjectsPath, project)
	}
}

