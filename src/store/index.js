import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import notices from './modules/notices'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		notices, user,
	},
})
