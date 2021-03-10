<template>
	<div class="profile__notification-item">
		<div class="profile__notification-item-title">
			<span class="profile__notification-item-text">
				Рекламодатель <strong>{{ notice.user.name }}</strong> хочет поработать с блогером
			</span>
			<a :href="serviceLink('accounts/' + notice.account.id)" class="profile__notification-item-link">{{ notice.account.title }}</a>
		</div>
		<div class="profile__notification-item-data">
			<div class="profile__notification-item-data-title">
				<div class="profile__notification-item-data-title-text">
					<h2 class="profile__notification-item-data-title-h2">
						Текст предложения:
					</h2>
					<p class="profile__notification-item-data-title-p">
						{{ notice.text }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'OfferNotice',
	props: {
		notice: {
			type: Object,
			required: true,
		},
	},
}
</script>
