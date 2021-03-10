<template>
	<div class="profile__notification-item">
		<div class="profile__notification-item-title">
			<h2 class="profile__notification-item-data-info-user-h2">
				Создали предложение
			</h2>
			<a :href="serviceLink('projects/' + notice.id)" class="profile__notification-item-info-text">
				<p class="profile__notification-item-info-text-p">
					{{ notice.name }}
				</p>
			</a>
		</div>
		<div class="profile__notification-item-data">
			<div class="profile__notification-item-data-info-user">
				<div class="profile__notification-item-data-info-user-text">
					<h2 class="profile__notification-item-data-info-user-h2">
						Бюджет:
					</h2>
					<p class="profile__notification-item-data-info-user-p">
						{{ notice.budget.toLocaleString() }}₽
					</p>
				</div>
				<div class="profile__notification-item-data-info-user-text">
					<h2 class="profile__notification-item-data-info-user-h2">
						Имя:
					</h2>
					<p class="profile__notification-item-data-info-user-p">
						{{ notice.user.name }}
					</p>
				</div>
				<div class="profile__notification-item-data-info-user-text">
					<h2 class="profile__notification-item-data-info-user-h2">
						Текст предложения:
					</h2>
					<p class="profile__notification-item-data-info-user-p cursor">
						<template v-if="showAllText">
							{{ notice.text }}
						</template>
						<template v-else>
							{{ notice.text | cut(95) }}
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
				<div class="profile__notification-item-data-info-user-text"
					  v-if="notice.followers_from || notice.followers_to">
					<h2 class="profile__notification-item-data-info-user-h2">
						Желаемая аудитория:
					</h2>
					<p class="profile__notification-item-data-info-user-p">
						<template v-if="notice.followers_from">
							от {{ notice.followers_from }}
						</template>
						<template v-if="notice.followers_to">
							до {{ notice.followers_to }}
						</template>
						подписчиков
					</p>
				</div>
			</div>
		</div>
		<div class="profile__notification-item-button">
			<preloader
				v-if="loading"
				small
			/>
			<button
				@click.prevent="removeProject"
				v-else
				class="profile__notification-item-button-text button-grand-transparent"
			>
				Удалить предложение
			</button>
		</div>
	</div>
</template>

<script>
import projectsService from '@/api/projectsService'
import Preloader from '@/components/Preloader'

export default {
	name: 'ProjectNotice',
	components: {Preloader},
	props: {
		notice: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		showAllText: false,
		loading: false,
	}),
	methods: {
		removeProject() {
			if (confirm('Вы точно хотите удалить рекламное предложение? Восстановить его будет невозможно.')) {
				this.loading = true
				projectsService.deleteProject(this.notice.id)
					.then(() => {
						this.$notify('Предложение удалено!')
						this.$emit('deleted')
					})
					.catch(() => {
						alert('Произошла ошибка отправки формы. Повторите позже.')
					})
			}
		},
	},
}
</script>
