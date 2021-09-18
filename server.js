const server = require("express")();
const serverBundle = require("./dist/vue-ssr-server-bundle.json");
const renderer = require("vue-server-renderer")
	.createBundleRenderer(serverBundle, {
		runInNewContext: false,
		template: require('fs').readFileSync('./public/index.html', 'utf-8'),
		clientManifest: require('./dist/vue-ssr-client-manifest.json')
	});

server.use(require("express").static("dist"));

server.get("*", (req, res) => {
	const context = { url: req.url };
	renderer.renderToString(context, (err, html) => {
		if(err){
			if(err.code === 404) {
				res.status(404).end('страница не найдена');
			} else {
				res.status(500).end("внутреняя ошибка сервера 500");
			}
		} else {
			res.end(html);
		}
	});
});

server.listen(8080, () => {
	console.log('Server started on port', 8080);
});