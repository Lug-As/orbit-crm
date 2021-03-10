<template>
	<div class="profile__notification-item">
		<div class="profile__notification-item-title">
			<router-link :to="{name: 'Account', params: {id: notice.account.id}}"
							 class="profile__notification-item-link">
				{{ notice.account.title }}
			</router-link>
			<span class="profile__notification-item-text">откликнулся на предложение</span>
			<router-link :to="{name: 'Project', params: {id: notice.project.id}}"
							 class="profile__notification-item-info-text">
				<p class="profile__notification-item-info-text-p">
					{{ notice.project.name }}
				</p>
			</router-link>
		</div>
		<div class="profile__notification-item-data">
			<div class="profile__notification-item-data-title">
				<div class="profile__notification-item-data-title-text">
					<h2 class="profile__notification-item-data-title-h2">
						Комментарий блогера:
					</h2>
					<p class="profile__notification-item-data-title-p">
						{{ notice.text }}
					</p>
				</div>
			</div>
			<transition name="slide-up-down">
				<div class="profile__notification-item-data-info-user" v-if="displayContacts">
					<div class="profile__notification-item-data-info-user-text">
						<h2 class="profile__notification-item-data-info-user-h2">
							Имя:
						</h2>
						<p class="profile__notification-item-data-info-user-p">
							{{ notice.account.name }}
						</p>
					</div>
					<div class="profile__notification-item-data-info-user-text">
						<h2 class="profile__notification-item-data-info-user-h2">
							Эл. почта:
						</h2>
						<p class="profile__notification-item-data-info-user-p">
							<a :href="'mailto:' + notice.account.email">
								{{ notice.account.email }}
							</a>
						</p>
					</div>
					<div class="profile__notification-item-data-info-user-text">
						<h2 class="profile__notification-item-data-info-user-h2">
							Телефон:
						</h2>
						<p class="profile__notification-item-data-info-user-p">
							<a :href="'tel:8' + notice.account.phone">
								{{ notice.account.phone | phone }}
							</a>
						</p>
					</div>
				</div>
			</transition>
		</div>
		<div class="profile__notification-item-button">
			<button
				@click="displayContacts = !displayContacts"
				class="profile__notification-item-button-text button-grand-black"
			>
				<template v-if="displayContacts">
					Скрыть данные
				</template>
				<template v-else>
					Показать данные
				</template>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProfileResponseNotice',
	props: ['notice'],
	data: () => ({
		displayContacts: false,
	}),
}
</script>
