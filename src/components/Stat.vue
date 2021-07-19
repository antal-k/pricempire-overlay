<template>
	<span class="stat">
		<span class="stat-title" v-t="title" />
		<span class="stat-prefix">{{ prefix }}</span>
		<span class="stat-value">${{ valueFormated }}</span>
		<span
			v-if="percent !== 0"
			:class="['stat-percent', percent > 0 && 'up', percent < 0 && 'down']"
		>
			{{ percent }}%</span
		>
	</span>
</template>

<script>
const pollRate = 60; // every x seconds

export default {
	name: "Stat",
	async beforeMount() {
		// init
		this.$store.dispatch("stats/update", {
			root: true
		});

		setInterval(() => {
			this.$store.dispatch("stats/update", {
				root: true
			});
		}, pollRate * 1000);
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
	// background: var(--color-lightdark);
	border-radius: 0.4375rem;
	padding: 0.625rem;
	// padding-right: 1.25rem;
	// padding-left: 1.25rem;
	font-size: 1.875rem;
	&-title {
		font-weight: 400;
		color: white;
	}
	&-prefix {
		margin-left: 0.9375rem;
		margin-right: 0.07rem;
		color: #fff;
	}
	&-value {
		color: var(--color-blue);
		font-weight: 800;
	}
	&-percent {
		font-weight: 600;
		&.up {
			color: #0f0;
			&::before {
				content: "+";
				margin-right: -0.4375rem;
				margin-left: 0.625rem;
			}
		}
		&.down {
			color: #f00;
			&::before {
				content: "-";
				margin-right: -0.4375rem;
				margin-left: 0.625rem;
			}
		}
	}
}
</style>
