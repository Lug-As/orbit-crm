<template>
	<div class="profile__notification-item">
		<div class="profile__notification-item-title">
			<span class="profile__notification-item-text">Блогер <strong>{{ notice.name }}</strong> создал аккаунт</span>
		</div>
		<div class="profile__notification-item-data">
			<div class="profile__notification-item-data-info-user">
				<div class="profile__notification-item-data-info-user-text">
					<h2 class="profile__notification-item-data-info-user-h2">
						Название аккаунта:
					</h2>
					<span class="profile__notification-item-data-info-user-p">{{ notice.name }}</span>
				</div>
				<div class="profile__notification-item-data-info-user-text">
					<h2 class="profile__notification-item-data-info-user-h2">
						Имя пользователя:
					</h2>
					<p class="profile__notification-item-data-info-user-p">
						{{ notice.user.name }}
					</p>
				</div>
				<div class="profile__notification-item-data-info-user-text">
					<h2 class="profile__notification-item-data-info-user-h2">
						Типы рекламы:
					</h2>
					<p class="profile__notification-item-data-info-user-p">
						<template v-for="(type, idx) in notice.ad_types">
							{{ type.name }} {{ type.price ? `(${type.price.toLocaleString()}₽)` : '' }}
							{{ (idx + 1) !== notice.ad_types.length ? ' / ' : '' }}
						</template>
					</p>
				</div>
				<div class="profile__notification-item-data-info-user-text" v-if="notice.region">
					<h2 class="profile__notification-item-data-info-user-h2">
						Регион:
					</h2>
					<p class="profile__notification-item-data-info-user-p">
						{{ notice.region.name }} ({{ notice.region.country.name }})
					</p>
				</div>
				<div class="profile__notification-item-data-info-user-text" v-if="notice.ages && notice.ages.length">
					<h2 class="profile__notification-item-data-info-user-h2">
						Возрастные категории:
					</h2>
					<p class="profile__notification-item-data-info-user-p">
						{{ notice.ages | slashedList('range') }}
					</p>
				</div>
				<div class="profile__notification-item-data-info-user-text" v-if="notice.about">
					<h2 class="profile__notification-item-data-info-user-h2">
						О себе:
					</h2>
					<p class="profile__notification-item-data-info-user-p cursor" @click="showAllText = !showAllText">
						<template v-if="showAllText">
							{{ notice.about }}
						</template>
						<template v-else>
							{{ notice.about | cut(100) }}
						</template>
					</p>
				</div>
			</div>
		</div>
		<div class="profile__notification-item-button">
			<preloader
				v-if="loading"
				small
			/>
			<template v-else>
				<button
					@click.prevent="approve"
					class="profile__notification-item-button-text button-grand-transparent"
				>
					Подтвердить аккаунт
				</button>
				<button
					@click.prevent="showModal"
					class="profile__notification-item-button-text button-grand-black"
				>
					Отклонить заявку
				</button>
			</template>
		</div>
		<message-modal
			:open="openModal"
			@closed="openModal = false"
			@submit="cancel"
		/>
	</div>
</template>

<script>
import requestsService from '@/api/requestsService'
import Preloader from '@/components/Preloader'
import MessageModal from '@/components/MessageModal'

export default {
	name: 'RequestNotice',
	components: {MessageModal, Preloader},
	data: () => ({
		showAllText: false,
		loading: false,
		openModal: false,
	}),
	props: {
		notice: {
			type: Object,
			required: true,
		},
	},
	methods: {
		approve() {
			if (confirm('Подтвердить заявку на создание аккаунта? Аккаунт появиться на сайте.')) {
				this.loading = true
				requestsService.approveRequest(this.notice.id)
					.then(() => {
						this.$notify('Аккаунт подтвержден!')
						this.$emit('updated')
					})
					.catch(() => {
						alert('Произошла ошибка отправки формы. Повторите позже.')
					})
			}
		},
		cancel(msg = '') {
			this.loading = true
			requestsService.cancelRequest(this.notice.id, msg)
				.then(() => {
						this.$notify('Заявка отклонена!')
						this.$emit('updated')
					})
					.catch(() => {
						alert('Произошла ошибка отправки формы. Повторите позже.')
					})
		},
		showModal() {
			this.openModal = true
		},
	},
}
</script>
