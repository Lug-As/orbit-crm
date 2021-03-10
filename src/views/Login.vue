<template>
	<section class="crm">
		<div class="crm__row">
			<div class="crm__row-title">
				<h2 class="crm__row-title-h2">
					Вход в CRM-систему администратора
				</h2>
			</div>
			<form class="crm__form">
				<div class="login__row-form-body">
					<div class="login__row-form-item crm__row-item">
						<div class="login__row-form-item-label">
							<label for="log">
								Логин
							</label>
						</div>
						<div class="login__row-form-item-input">
							<input
								v-model.trim="email"
								type="text"
								id="log"
								required
							>
						</div>
					</div>
					<div class="login__row-form-item crm__row-item">
						<div class="login__row-form-item-label">
							<label for="crmlogpass">
								Пароль
							</label>
						</div>
						<div class="login__row-form-item-input">
							<input
								v-model="password"
								type="password"
								id="crmlogpass"
								required
							>
						</div>
					</div>
				</div>
				<div class="login__row-form-button crm__row-button">
					<button
						@click.prevent="login"
						type="submit"
						class="button-grand-black big"
					>
						ВОЙТИ
					</button>
				</div>
			</form>
			<preloader v-if="loading" class="auth-loader" height="100vh"/>
		</div>
	</section>
</template>

<script>
import tokenService from '@/auth/tokenService'
import authService from '@/api/authService'
import Preloader from '@/components/Preloader'

export default {
	name: 'Login',
	components: {Preloader},
	data: () => ({
		email: '',
		password: '',
		loading: false,
	}),
	methods: {
		login() {
			this.loading = true
			const userData = {
				email: this.email,
				password: this.password,
			}
			authService.login(userData)
				.then(response => {
					if (response.data.token) {
						const token = String(response.data.token).trim()
						tokenService.setToken(token)
						location.reload()
					} else {
						throw new Error
					}
				})
				.catch(e => {
					let display = true
					if (
						e.response && e.response.data && e.response.data.errors && e.response.data.errors.email
						&& Array.isArray(e.response.data.errors.email)
					) {
						const email_error = e.response.data.errors.email[0]
						if (email_error === 'These credentials do not match our records.') {
							alert('Данные введены неверно.')
							display = false
						}
					}
					if (display) {
						alert('Произошла ошибка отправки формы. Повторите позже.')
						this.showLogin = false
					}
				})
				.finally(() => {
					this.loading = false
				})
		},
	},
}
</script>

<style lang="scss" scoped>

</style>
