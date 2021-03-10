<template>
	<div class="preload-container"
		  :style="{
				'height': containerHeight,
			}"
	>
		<div
			class="sk-circle-bounce"
			:class="{
				'small': this.small,
			}"
		>
			<div class="sk-child sk-circle-1"></div>
			<div class="sk-child sk-circle-2"></div>
			<div class="sk-child sk-circle-3"></div>
			<div class="sk-child sk-circle-4"></div>
			<div class="sk-child sk-circle-5"></div>
			<div class="sk-child sk-circle-6"></div>
			<div class="sk-child sk-circle-7"></div>
			<div class="sk-child sk-circle-8"></div>
			<div class="sk-child sk-circle-9"></div>
			<div class="sk-child sk-circle-10"></div>
			<div class="sk-child sk-circle-11"></div>
			<div class="sk-child sk-circle-12"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Preloader',
	props: {
		height: {
			type: [Number, String],
			required: false,
			default: 450,
		},
		small: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	computed: {
		containerHeight() {
			if (this.small) {
				return '85px'
			}
			return String(this.height).match(/^[0-9]+$/) ? (this.height + 'px') : this.height
		},
	},
}
</script>

<style scoped lang="scss">
$spinkit-size: 6em !default;
$spinkit-size-small: 4em !default;
$spinkit-spinner-color: #337ab7 !default;

.preload-container {
	display: flex;
}

.sk-circle-bounce {
	$circleCount: 12;
	$animationDuration: 1.2s;

	width: $spinkit-size;
	height: $spinkit-size;
	position: relative;
	margin: auto;

	&.small {
		width: $spinkit-size-small;
		height: $spinkit-size-small;
	}

	.sk-child {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}

	.sk-child:before {
		content: '';
		display: block;
		margin: 0 auto;
		width: 15%;
		height: 15%;
		background-color: $spinkit-spinner-color;
		border-radius: 100%;
		animation: sk-circle-bounce-delay $animationDuration infinite ease-in-out both;
	}

	@for $i from 2 through $circleCount {
		.sk-circle-#{$i} {
			transform: rotate((360deg / $circleCount * ($i - 1)));
		}
	}

	@for $i from 2 through $circleCount {
		.sk-circle-#{$i}:before {
			animation-delay: (-$animationDuration + $animationDuration / $circleCount * ($i - 1));
		}
	}
}

@keyframes sk-circle-bounce-delay {
	0%, 80%, 100% {
		transform: scale(0);
	}
	40% {
		transform: scale(1.0);
	}
}
</style>
