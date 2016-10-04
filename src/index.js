import helloWorld from './hello-world';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send(helloWorld());
});

app.listen(8080);
