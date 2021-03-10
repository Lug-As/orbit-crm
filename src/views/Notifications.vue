<template>
	<section class="notifications-crm">
		<div class="container">
			<div class="notifications-crm__row">
				<div class="notifications-crm__row-title">
					<h2 class="notifications-crm__row-title">Уведомления</h2>
				</div>
				<preloader v-if="noticesLoading"/>
				<div
					v-else-if="notices && notices.length"
					class="notifications-crm__row-body profile__notification-row"
				>
					<div
						v-for="notice in notices"
						class="profile__notification-body"
					>
						<response-notice
							v-if="notice.type === 'responses'"
							:notice="notice"
						/>
						<offer-notice
							v-else-if="notice.type === 'offers'"
							:notice="notice"
						/>
						<account-notice
							v-else-if="notice.type === 'requests'"
							:notice="notice"
							@deleted="loadNotices"
						/>
						<project-notice
							v-else-if="notice.type === 'projects'"
							:notice="notice"
							@deleted="loadNotices"
						/>
					</div>
				</div>
				<template v-else>
					<p class="empty-result-text">Пока нет уведомлений</p>
				</template>
				<br>
				<div class="objects-pagination">
					<pagination
						:data="noticesPagination"
						:limit="3"
						@pagination-change-page="changePage"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Preloader from '@/components/Preloader'
import ResponseNotice from '@/components/notices/ResponseNotice'
import OfferNotice from '@/components/notices/OfferNotice'
import AccountNotice from '@/components/notices/AccountNotice'
import ProjectNotice from '@/components/notices/ProjectNotice'

export default {
	name: 'Notifications',
	components: {ProjectNotice, AccountNotice, OfferNotice, ResponseNotice, Preloader},
	title: 'Уведомления',
	computed: {
		notices() {
			return this.$store.getters.notices
		},
		noticesLoading() {
			return this.$store.getters.noticesLoading
		},
		noticesPagination() {
			return this.$store.getters.noticesPagination
		},
		page() {
			let page
			if (this.$route.query['page']) {
				page = Math.abs(parseInt(this.$route.query['page']))
				if (page === 1) {
					this.clearQueryParam('page')
				}
			} else {
				page = 1
			}
			if (page === 0 || !Number.isInteger(page)) {
				page = 1
			}
			return page
		},
		user() {
			return this.$store.getters.user
		},
	},
	methods: {
		loadNotices() {
			this.$store.dispatch('loadNotices', {
				page: this.page,
			})
		},
		clearQueryParam(key) {
			if (this.$route.query[key] !== undefined) {
				let query = Object.assign({}, this.$route.query)
				delete query[key]
				this.$router.replace({query})
			}
		},
		scrollToTop(top = 0) {
			window.scrollTo({
				top,
				behavior: 'smooth',
			})
		},
		changePage(page = 1) {
			if (page !== this.page) {
				this.scrollToTop(160)
				this.$router.push({
					name: this.$route.name,
					query: {
						page,
					},
				})
					.then(() => this.loadNotices())
				return true
			}
			return false
		},
	},
	mounted() {
		if (this.user) {
			this.loadNotices()
		} else {
			this.$onUserLoad.hook(this.loadNotices)
		}
	},
}
</script>
