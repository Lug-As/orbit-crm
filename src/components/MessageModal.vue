<template>
	<div class="message-modal">
		<transition name="fade">
			<div
				v-if="showModal"
				class="bloger__massage"
				@click.self="closeModal()"
			>
				<div class="bloger__massage-row">
					<span
						class="bloger__massage-close"
						@click="closeModal()"
					>&times;</span>
					<div class="bloger__massage-alert">
						<h2 class="bloger__alert-h2">
							По желанию укажите причину отклонения заявки. Пользователю будет легче понять, что от него
							требуется.
						</h2>
					</div>
					<form class="bloger__massage-comment" @submit.prevent="handleForm">
						<div class="bloger__comment-text">
							<textarea
								v-model.trim="offerText"
								class="bloger__text-area"
							></textarea>
							<span
								:class="{
									'red': !this.$v.offerText.maxLength,
								}"
							>{{ this.offerText.length }}/{{ this.$v.offerText.$params.maxLength.max }}</span>
							<p v-if="errorMsg.length" class="red">{{ errorMsg }}</p>
						</div>
						<div class="bloger__comment-button">
							<button class="bloger__button-border">Отклонить заявку</button>
						</div>
					</form>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import {maxLength} from 'vuelidate/lib/validators'

export default {
	name: 'MessageModal',
	props: {
		open: {
			type: Boolean,
			default: false,
			required: false,
		},
	},
	data: () => ({
		showModal: false,
		offerText: '',
		errorMsg: '',
	}),
	watch: {
		open(val) {
			if (val === true) {
				this.showModal = true
			}
		},
	},
	methods: {
		closeModal() {
			this.showModal = false
			this.$emit('closed')
		},
		handleForm() {
			if (this.validate()) {
				this.$emit('submit', this.offerText)
				this.offerText = ''
				this.errorMsg = ''
				this.$v.$reset()
				this.closeModal()
			}
		},
		validate() {
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.setErrors()
				return false
			}
			return true
		},
		setErrors() {
			if (!this.$v.offerText.maxLength) {
				this.errorMsg = 'Текст предложения не должен превышать ' + this.$v.offerText.$params.maxLength.max + ' символов.'
			}
		},
	},
	validations: {
		offerText: {
			maxLength: maxLength(250),
		},
	},
}
</script>
