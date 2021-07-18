/**
 * @typedef {typeof state} State
 */

import { getMeta } from '@/api/meta';
import { replaceState } from '@/store/index';

const state = {
	skins: 0,
	prices: 0,
	sites: 0,
	volume: 0,
	marketItems: {
		rare6: 0,
		rare5: 0,
		rare4: 0,
		rare3: 0,
		rare2: 0,
		rare1: 0,
		count: 0,
		countPrevDay: 0
	},
	percentages: {
		rare0: 0,
		rare1: 0.6,
		rare2: 0.3,
		rare3: 0.064,
		rare4: 0.029,
		rare5: 0.0045,
		rare6: 0.0025,
		rare7: 0
	},
	marketCap: 0,
	marketCapPrevDay: 0,
	marketValue: 0,
	marketValuePrevDay: 0
};

/**
 * @type {import("vuex").MutationTree<State>}
 */
const mutations = {
	setStats(state, stats) {
		state.stats = stats;
	},
	setSkins(state, skins) {
		state.skins = skins;
	},
	setPrices(state, prices) {
		state.prices = prices;
	},
	setVolume(state, volume) {
		state.volume = volume;
	},
	setMarketItems(state, marketItems) {
		state.marketItems = marketItems;
	},
	setPercentages(state, percentages) {
		state.percentages = percentages;
	},
	setMarketCap(state, marketCap) {
		state.marketCap = marketCap;
	},
	setMarketCapPrevDay(state, marketCapPrevDay) {
		state.marketCapPrevDay = marketCapPrevDay;
	},
	setMarketValue(state, marketValue) {
		state.marketValue = marketValue;
	},
	setMarketValuePrevDay(state, marketValuePrevDay) {
		state.marketValuePrevDay = marketValuePrevDay;
	},
};

/**
 * @type {import("vuex").ActionTree<State, import("@/store/index").RootState>}
 */
const actions = {
	async update({ commit, dispatch, state }) {
		try {
			const meta = await getMeta();
			replaceState('stats', meta);
			commit("setStats", meta);
		} catch (e) {
			console.log("🚀 ~ file: store/stats/index.js ~ line 58 ~ update ~ e", e);
		}
	}
};

/**
 * @type {import("vuex").GetterTree<State, import("@/store/index").RootState>}
 */
const getters = {
	uniqueItemsCount(state) {
		return state.marketItems.count;
	},
	uniqueItemsPercent(state) {
		return (
			(Math.round(
				(state.marketItems.count / state.marketItems.countPrevDay) * 100
			) / 100)
		);
	},
	marketCapPercent(state) {
		return Math.round((state.marketCap / state.marketCapPrevDay) * 100) / 100;
	},
	marketValuePercent(state) {
		return (
			(Math.round((state.marketValue / state.marketValuePrevDay) * 100) / 100)
		);
	}
};

export default {
	state,
	mutations,
	getters,
	actions,
	namespaced: true
};
