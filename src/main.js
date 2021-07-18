import Vue from "vue";

import "@/styles/app.scss";

import "remixicon/fonts/remixicon.css";

import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

import i18n from "@/lang/i18n";

import VueSparklines from "vue-sparklines";
import AxiosPlugin from "@/plugins/axios";

Vue.use(AxiosPlugin);
Vue.use(VueSparklines);

new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount("#app");
