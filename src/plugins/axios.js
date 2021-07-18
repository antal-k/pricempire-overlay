import axios from "../libs/axios";

const axiosPlugin = {
	install(Vue) {
		Vue.prototype.$axios = axios;
	},
};

export default axiosPlugin;