<template>
	<div id="app">
		<router-view v-if="layout === false"/>
		<main-layout v-else/>
	</div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import {I} from '@/assets/js/script'

export default {
	components: {
		MainLayout,
	},
	computed: {
		layout() {
			return this.$route.meta['layout']
		},
	},
	mounted() {
		I.init()
	},
}
</script>
