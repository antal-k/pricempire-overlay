import Vue from "vue";
import VueRouter from "vue-router";
import MarketCap from "@/views/MarketCap";

Vue.use(VueRouter);

const routes = [
	{
		path: "/market-cap",
		component: MarketCap,
		meta: {
			title: "Pricempire.com - Overlay",
			metaTags: [
				{
					name: "description",
					content: "Pricempire.com - Overlay"
				}
			]
		}
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});


export default router;
