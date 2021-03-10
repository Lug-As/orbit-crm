<template>
	<renderless-pagination
		:data="data"
		:limit="limit"
		:show-disabled="showDisabled"
		:size="size"
		:align="align"
		@pagination-change-page="onPaginationChangePage">

		<ul class="pagination"
			 :class="{
                'pagination-sm': size === 'small',
                'pagination-lg': size === 'large',
                'justify-content-center': align === 'center',
                'justify-content-end': align === 'right'
            }"
			 v-if="computed.total > computed.perPage"
			 slot-scope="{ data, limit, showDisabled, size, align, computed, prevButtonEvents, nextButtonEvents, pageButtonEvents }">

			<li class="pagination-item prev-nav" :class="{'disabled': !computed.prevPageUrl}"
				 v-if="computed.prevPageUrl || showDisabled">
				<a class="pagination-item-link" :href="computed.prevPageUrl" aria-label="Previous"
					:tabindex="!computed.prevPageUrl && -1"
					v-on="prevButtonEvents">
					<slot name="prev-nav">
						<span class="pagination-item-arrow">&lt;</span>
					</slot>
				</a>
			</li>

			<li class="pagination-item page-nav" v-for="(page, key) in computed.pageRange" :key="key"
				 :class="{ 'active': page === computed.currentPage, 'disabled': (page === '...') }">
				<a class="pagination-item-link" v-on="pageButtonEvents(page)">
					{{ page }}
				</a>
			</li>

			<li class="pagination-item next-nav" :class="{'disabled': !computed.nextPageUrl}"
				 v-if="computed.nextPageUrl || showDisabled">
				<a class="pagination-item-link" :href="computed.nextPageUrl" aria-label="Next"
					:tabindex="!computed.nextPageUrl && -1"
					v-on="nextButtonEvents">
					<slot name="next-nav">
						<span class="pagination-item-arrow">&gt;</span>
					</slot>
				</a>
			</li>

		</ul>

	</renderless-pagination>
</template>

<script>
import RenderlessPagination from './RenderlessPagination.vue'

export default {
	name: 'Pagination',
	props: {
		data: {
			type: Object,
			default: () => ({}),
		},
		limit: {
			type: Number,
			default: 0,
		},
		showDisabled: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			default: 'default',
			validator: value => {
				return ['small', 'default', 'large'].indexOf(value) !== -1
			},
		},
		align: {
			type: String,
			default: 'left',
			validator: value => {
				return ['left', 'center', 'right'].indexOf(value) !== -1
			},
		},
	},

	methods: {
		onPaginationChangePage(page) {
			this.$emit('pagination-change-page', page)
		},
	},

	components: {
		RenderlessPagination,
	},
}
</script>


<style lang="scss">
$link_color: #161616;

.pagination {
	padding: 0;
	text-align: center;

	&-item {
		display: inline-block;
		margin: 0 8px;
		color: $link_color;
		transition: background-color .15s, color .15s;
		cursor: pointer;
		font-size: 25px;

		@media (max-width: 575px) {
			font-size: 22px;
		}
		@media (max-width: 353px) {
			margin: 0 4.5px;
		}

		&:hover {
			color: #BEBEBE;
		}

		&.active {
			color: #F906DD;
			text-decoration: underline;
			cursor: default;
			font-size: 35px;

			@media (max-width: 575px) {
				font-size: 30px;
			}
			@media (max-width: 353px) {
				font-size: 22px;
			}
		}

		&.disabled {
			color: #BEBEBE;
			cursor: default;
			margin: 0;
		}

		&.prev-nav {
			margin-left: 0;
		}

		&.next-nav {
			margin-right: 0;
		}

		&.prev-nav, &.next-nav {
			a {
				width: 100%;
				height: 100%;
				display: inline-block;
			}

			@media (max-width: 999px) {
				$round_size: 49px;

				font-size: 16px;
				height: $round_size;
				width: $round_size;
				background-color: #0FA4F2;
				color: #fff;
				border-radius: 50%;

				&:hover {
					background-color: darken(#0FA4F2, 10);
				}

				a {
					line-height: $round_size;
				}
			}
			@media (max-width: 353px) {
				$round_size: 30px;
				height: $round_size;
				width: $round_size;

				a {
					line-height: $round_size;
				}
			}
		}

		&-link {
			color: inherit;
			cursor: inherit;
		}
	}
}
</style>
