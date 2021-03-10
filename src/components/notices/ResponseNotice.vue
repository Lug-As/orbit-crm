<template>
	<div class="profile__notification-item">
		<div class="profile__notification-item-title">
			<span class="profile__notification-item-text">Блогер</span>
			<a :href="serviceLink('accounts/' + notice.account.id)"
				class="profile__notification-item-link">{{ notice.account.title }}</a>
			<span class="profile__notification-item-text">хочет прорекламировать предложение</span>
			<a :href="serviceLink('projects/' + notice.project.id)" class="profile__notification-item-info-text">
				<p class="profile__notification-item-info-text-p">
					{{ notice.project.name }}
				</p>
			</a>
		</div>
		<div class="profile__notification-item-data">
			<div class="profile__notification-item-data-title">
				<div class="profile__notification-item-data-title-text">
					<h2 class="profile__notification-item-data-title-h2">
						Текст отклика:
					</h2>
					<p class="profile__notification-item-data-title-p">
						{{ notice.text }}
					</p>
				</div>
			</div>
			<div class="profile__notification-item-data-info-user">
				<div class="profile__notification-item-data-info-user-text">
					<h2 class="profile__notification-item-data-info-user-h2">
						Бюджет:
					</h2>
					<p class="profile__notification-item-data-info-user-p">
						{{ notice.project.budget.toLocaleString() }}₽
					</p>
				</div>
				<div class="profile__notification-item-data-info-user-text">
					<h2 class="profile__notification-item-data-info-user-h2">
						Рекламодатель:
					</h2>
					<p class="profile__notification-item-data-info-user-p">
						{{ notice.project.user.name }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ResponseNotice',
	props: {
		notice: {
			type: Object,
			required: true,
		},
	},
}
</script>
