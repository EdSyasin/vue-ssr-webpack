import { createApp } from "./app.js";

export default context => {
	return new Promise((resolve, reject) => {
		const { app, router } = createApp();
		router.push(context.url);
		
		router.onReady(() => {
			const matchesComponents = router.getMatchedComponents();
			if(!matchesComponents.length){
				return reject({ code: 404 });
			}
			resolve(app);
		}, reject);
	});
}