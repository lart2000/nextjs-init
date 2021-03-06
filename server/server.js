const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

app.prepare()
	.then(() => {
		const server = express()
		server.get('/robots.txt', (req, res) => {
			let options         = {};
			    options.root    = __dirname + '/../static/';
			    options.headers = {'Content-Type': 'text/plain;charset=UTF-8'};
				return res.status(200).sendfile("robots.txt", options);
		})
		.get('/post', (req, res) => {
			return app.render(req, res, '/posts', req.query)
		})
		.get('/c', (req, res) => {
			return app.render(req, res, '/c', req.query)
		})

		.get('/posts/:id', (req, res) => {
			return app.render(req, res, '/posts', { id: req.params.id })
		})
		.get('*', (req, res) => {
			return handle(req, res)
		})
		.listen(port, (err) => {
			if (err) throw err
			console.log(`> Ready on http://localhost:${port}`)
		})
	})