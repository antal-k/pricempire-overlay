<template>
	<div :class="['main-stats']">
		<Stat
			title="stats.uniqueItems"
			prefix="~"
			:value="uniqueItemsCount"
			:percent="uniqueItemsPercent"
		/>
		<Stat
			title="stats.marketCap"
			prefix="~"
			:value="marketCap"
			:percent="marketCapPercent"
		/>
		<Stat
			title="stats.marketValue"
			prefix="~"
			:value="marketValue"
			:percent="marketValuePercent"
		/>
		<Stat title="stats.trackedSkins" :value="trackedSkins" />
		<Stat title="stats.trackedSites" :value="trackedSites" />
		<Stat title="stats.savedPrices" :value="savedPrices" />
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Stat from "./Stat.vue";

export default {
	name: "MainStats",
	components: {
		Stat
	},
	computed: {
		...mapState("stats", {
			trackedSkins: "skins",
			savedPrices: "prices",
			trackedSites: "sites",
			marketCap: "marketCap",
			marketValue: "marketValue",
			marketValuePrevDay: "marketValuePrevDay",
			marketCapPrevDay: "marketCapPrevDay",
			uniqueItems: "marketItems"
		}),
		...mapGetters("stats", [
			"uniqueItemsCount",
			"uniqueItemsPercent",
			"marketCapPercent",
			"marketValuePercent"
		])
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.main-stats {
	display: flex;
	justify-content: space-between;
	font-size: 0.6875rem;
	color: silver;
	align-items: center;
	padding: 0.3125rem 0.9375rem;
	border-radius: 0.3125rem;
}
</style>
