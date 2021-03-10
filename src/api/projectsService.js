import axios from 'axios'

const ProjectsPath = 'projects'

export default {
	async deleteProject(id) {
		return axios.delete(ProjectsPath + '/' + encodeURI(id))
	},
}

