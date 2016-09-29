import express from 'express';
import serveStatic from 'serve-static';
import { version } from '../../package.json';

const app = express();
app.use(serveStatic(`${__dirname}/../public`));

app.get('/', (req, res) => {
	const html = `<!doctype html>
<html>
	<head>
		<title>Rollup test</title>
	</head>
	<body>
		<div id="app-root"></div>
		<script src="/js/app.js"></script>
	</body>
</html>`;
	res.send(html);
});

app.listen(8080);
