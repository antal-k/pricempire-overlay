import Vue from "vue";
import VueI18n from "vue-i18n";

import en from "@/lang/en";

Vue.use(VueI18n);

export const fallbackLocale = "en";
export const defaultLocale = localStorage.getItem("site:locale") || fallbackLocale;

const i18n = new VueI18n({
	locale: "en",
	fallbackLocale,
	silentFallbackWarn: true,
	messages: {
		en,
	},
});

export default i18n;
