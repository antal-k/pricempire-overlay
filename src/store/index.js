import Vue from "vue";
import Vuex from "vuex";

import statsModule from "@/store/stats";
import { camelCase, upperFirst } from "lodash-es";

Vue.use(Vuex);

const store = createRootModule();

export function createRootModule() {
	return new Vuex.Store({
		modules: {
			stats: statsModule,
		}
	});
}

export function isValidMutation(store, mutation) {
	return mutation in store._mutations;
}

export function isValidAction(store, action) {
	return action in store._actions;
}

export function replaceState(modulePath, data, _module = store) {
	if (typeof data !== "object" || data == null) {
		console.error(
			`Unable to replace state: "data" is not an object (actual: ${data})`
		);
		return;
	}

	for (const key in data) {
		const mutationName = `${modulePath}/set${upperFirst(camelCase(key))}`;

		if (!isValidMutation(_module, mutationName)) {
			console.warn(`Mutation ${mutationName} does not exist`);
			continue;
		}

		_module.commit(mutationName, data[key], { root: true });
	}
}

export default store;
