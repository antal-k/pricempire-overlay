<template>
	<div class="market-cap-view">
		<Stat
			title="stats.marketCap"
			prefix="~"
			:value="marketCap"
			:percent="marketCapPercent"
		/>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Stat from "@/components/Stat.vue";
export default {
	components: {
		Stat
	},
	name: "MarketCap",
	data() {
		return {};
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
	}
};
</script>

<style lang="scss" scoped>
@use "@/styles/theme";

.market-cap-view {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
