<template>
	<div>
		<header class="header header__blogers normal-header">
			<div class="container">
				<div class="header__row normal-row">
					<div class="header__menu-mobile">
						<span class="header__menu-burger" @click="displayMenu = !displayMenu"></span>
					</div>
					<div class="header__img">
						<a href="/">
							<picture>
								<source srcset="../assets/img/Логотип.webp" type="image/webp">
								<img src="../assets/img/Логотип.png" alt="">
							</picture>
						</a>
					</div>

					<div class="header__menu">
						<transition name="upper">
							<ul class="header__menu-ul" v-if="menuOpened">
								<li class="header__menu-li ">
									<a href="" class="header__menu-link add-li">Главная</a>
									<ul class="header__menu-drop">
										<li class="header__menu-li ">
											<a href="" class="header__menu-link">Блогеру</a>
										</li>
										<li class="header__menu-li">
											<a href="" class="header__menu-link">Рекламодателю</a>
										</li>
									</ul>
								</li>
								<li class="header__menu-li">
									<a :href="serviceLink('accounts')" class="header__menu-link">Блогеры</a>
								</li>
								<li class="header__menu-li">
									<a :href="serviceLink('projects')" class="header__menu-link">Рекламные предложения
									</a>
								</li>
							</ul>
						</transition>
					</div>
					<div class="header__sign">
						<div class="header__log-row" v-if="authCheck">
							<ul class="header__log-ul">
								<li class="header__menu-li-left">
									<a :href="serviceLink('profile')" class="header__menu-left-link"
										title="Перейти в личный кабинет">
										<picture>
											<source srcset="../assets/img/noneimg.webp" type="image/webp">
											<img src="../assets/img/noneimg.png" alt="">
										</picture>
									</a>
									<ul class="header__li-left-drop">
										<li class="header__li-nickname">
											<h2 class="header__nickname-text" v-if="user">
												<a>{{ user.name }}</a>
											</h2>
											<ul class="header__menu-drop width-all">
												<li class="header__drop-li">
													<a :href="serviceLink('profile')" class="header__li-link">
														Личный кабинет
													</a>
												</li>
												<li class="header__drop-li">
													<span
														@click="logout"
														class="header__li-link cursor"
													>Выход</span>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div class="header__sign-row" v-else>
							<button
								@click="showLogin = true"
								class="header__menu-sign button-grand"
							>
								Вход
							</button>
							<button
								@click="showSign = true"
								class="header__menu-sign button-grand"
							>
								Регистрация
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
		<template>
			<router-view></router-view>
		</template>
		<transition name="side-slide">
			<div class="profile__notifications" v-if="showNotice" @click="closeNotice">
				<div class="profile__notifications-row">
					<div class="profile__notifications-img">
						<picture>
							<source srcset="../assets/img/notific.webp" type="image/webp">
							<img src="../assets/img/notific.png" alt="">
						</picture>
					</div>
					<div class="profile__notifications-text">
						<p class="profile__notifications-text-p" v-html="noticeText"></p>
					</div>
				</div>
			</div>
		</transition>
		<preloader v-if="loading" class="auth-loader" height="100vh"/>
		<footer class="footer normal-footer">
			<div class="container">
				<div class="footer__row">
					<div class="footer__img">
						<picture>
							<source srcset="../assets/img/LogoFooter.webp" type="image/webp">
							<img src="../assets/img/LogoFooter.png" alt=""></picture>
					</div>
					<div class="footer__menu">
						<ul class="footer__menu-ul">
							<li class="footer__ul-li">
								<a :href="serviceLink()" class="footer__li-link">Главная</a>
							</li>
							<li class="footer__ul-li">
								<a :href="serviceLink('accounts')" class="footer__li-link">
									Блогеры
								</a>
							</li>
							<li class="footer__ul-li">
								<a :href="serviceLink('projects')" class="footer__li-link">
									Рекламные предложения
								</a>
							</li>
							<li class="footer__ul-li">
								<a :href="serviceLink()" class="footer__li-link">Информация Блогеру</a>
							</li>
							<li class="footer__ul-li">
								<a :href="serviceLink()" class="footer__li-link">Рекламодателю</a>
							</li>
						</ul>
					</div>
					<div class="footer__rights">
						<div class="footer__rights-contract">
							<a href class="footer__li-link">Договор на обработку персональных данных</a>
						</div>
						<div class="footer__rights-right">
							<a class="footer__li-link">Орбита 2021 /©Все права защищены!</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
import Vue from 'vue'
import tokenService from '@/auth/tokenService'
import Preloader from '@/components/Preloader'

export default {
	name: 'MainLayout',
	components: {Preloader},
	data: () => ({
		showNotice: false,
		noticeText: null,
		showLogin: false,
		showSign: false,
		showForget: false,
		showChange: false,
		loading: false,
		displayMenu: false,
	}),
	watch: {
		showNotice(val) {
			if (val === true) {
				setTimeout(this.closeNotice, 2500)
			}
		},
		'$route'(val) {
			if (val['name'] === 'ChangePassword') {
				this.showChange = true
			}
		},
	},
	computed: {
		authCheck() {
			return this.$store.getters.authCheck
		},
		menuOpened() {
			return document.body.clientWidth >= 1366 || this.displayMenu
		},
		user() {
			return this.$store.getters.user
		},
	},
	methods: {
		closeNotice() {
			this.showNotice = false
			this.noticeText = null
		},
		logout() {
			if (confirm('Вы точно хотите выйти из учетной записи?')) {
				tokenService.clearToken()
				location.reload()
			}
		},
	},
	mounted() {
		if (this.$route.name === 'ChangePassword') {
			this.showChange = true
		}
		Vue.prototype.$notify = (text) => {
			this.noticeText = text
			this.showNotice = true
		}
	},
}
</script>
