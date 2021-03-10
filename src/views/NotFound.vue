<template>
	<section class="error-page">
		<div class="container">
			<div class="error-page__row">
				<div class="error-page__row-title">
					<div class="error-page__row-title-text">
						<h2 class="error-page__row-title-text-h2">
							4
						</h2>
					</div>
					<div class="error-page__row-title-img">
						<picture>
							<source srcset="../assets/img/alien.webp" type="image/webp">
							<img src="../assets/img/alien.png" alt=""></picture>
					</div>
					<div class="error-page__row-title-text">
						<h2 class="error-page__row-title-text-h2">
							4
						</h2>
					</div>
				</div>
				<div class="error-page__row-body">
					<div class="error-page__row-text">
						<p class="error-page__row-text-p">
							Страница была захвачена пришельцами в скором времени мы отобъем их атаку и восстановим доступ к
							ней!
						</p>
					</div>
					<div class="error-page__row-button">
						<a href="/" class="button-grand-first big">
							Вернуться на главную
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'NotFound',
	title: 'Страница не найдена',
}
</script>

<style scoped>
.container {
	text-align: center;
}
</style>
