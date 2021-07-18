import Axios from "axios";

const axios = Axios.create({
	baseURL: process.env.VUE_APP_AXIOS_URL,
	timeout: 10000,
	withCredentials: true,
});

export default axios;
