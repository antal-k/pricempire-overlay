/**
 * @typedef {typeof state} State
 */
const state = {};

/**
 * @type {import("vuex").MutationTree<State>}
 */
const mutations = {};

/**
 * @type {import("vuex").ActionTree<State, import("@/store/index").RootState>}
 */
const actions = {};

/**
 * @type {import("vuex").GetterTree<State, import("@/store/index").RootState>}
 */
const getters = {};

export default {
	state,
	mutations,
	getters,
	actions,
	namespaced: true,
};
