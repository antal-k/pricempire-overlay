import axios from "@/libs/axios";

export async function getMeta() {
	try {
		return (await axios.get(`api/meta/stats`)).data;
	} catch (e) {
		console.log("🚀 ~ file: meta.js ~ line 7 ~ getMeta ~ e", e);
	}
}
