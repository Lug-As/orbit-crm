import Vue from 'vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import App from './App.vue'
import PaginationCmp from './components/pagination/Pagination'
import roundNumber from './helpers/filters/roundNumber'
import slashedList from './helpers/filters/slashedList'
import cutText from './helpers/filters/cutText'
import phoneNumber from './helpers/filters/phoneNumber'
import titleMixin from './helpers/mixins/titleMixin'
import serviceLink from './helpers/mixins/serviceLink'
import {ApiBaseUrl} from './api/info'
import './assets/css/main.css'
import './assets/css/my.scss'


Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.component('pagination', PaginationCmp)
Vue.filter('round', roundNumber)
Vue.filter('phone', phoneNumber)
Vue.filter('cut', cutText)
Vue.filter('slashedList', slashedList)
Vue.mixin(titleMixin)
Vue.mixin(serviceLink)

axios.defaults.baseURL = ApiBaseUrl

Vue.prototype.$onUserLoad = {
	hook(callback) {
		this.stack.push(callback)
	},
	stack: [],
}

new Vue({
	beforeCreate() {
		this.$store.dispatch('loadUser')
			.then(token => {
				if (token) {
					this.$onUserLoad.stack.forEach(func => func())
				}
			})
	},
	router,
	store,
	render: h => h(App),
}).$mount('#app')

