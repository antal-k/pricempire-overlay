<template>
	<span class="stat">
		<span class="stat-title">{{ title }}</span>
		<span class="stat-prefix">{{ prefix }}</span>
		<span class="stat-value">{{ valueFormated }}</span>
		<span
			v-if="percent !== 0"
			:class="['stat-percent', percent > 0 && 'up', percent < 0 && 'down']"
		>
			{{ percent }}%</span
		>
		<BaseTooltip
			v-if="tooltip"
			:delay="[tooltipDelay]"
			:placement="tooltipPlacement"
			boundary="viewport"
		>
			<span v-t="tooltip"></span>
		</BaseTooltip>
	</span>
</template>

<script>
export default {
	name: "Stat",

	async beforeMount() {
		await this.$store.dispatch("stats/update", {
			root: true
		});
	},
	props: {
		title: {
			type: String
		},
		prefix: {
			type: String,
			default: ""
		},
		value: {
			type: Number,
			default: 0
		},
		percent: {
			type: Number,
			default: 0
		},
		tooltip: {
			type: String,
			default: ""
		},
		tooltipPlacement: {
			type: String,
			default: "top"
		},
		tooltipDelay: {
			type: Number,
			default: 0
		}
	},
	computed: {
		valueFormated() {
			return new Intl.NumberFormat().format(this.value);
		}
	}
};
</script>

<style lang="scss" scoped>
.stat {
	width: 37.5rem;
	height: 3.125rem;
	padding: 0.625rem;
	font-size: 1.875rem;
	&-title {
		font-weight: 700;
		color: white;
	}
	&-prefix {
		margin-left: 0.9375rem;
		margin-right: 0.07rem;
		color: #fff;
	}
	&-value {
		color: var(--color-blue);
		font-weight: 600;
	}
	&-percent {
		font-weight: 600;
		&.up {
			color: #0f0;
		}
		&.down {
			color: #f00;
		}
	}
}
</style>
