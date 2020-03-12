import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { theme } from '../src/redux/reducers'
import path from 'path'
import proxy from 'express-http-proxy'

import fs from "fs"
import App from "../src/App"

const PORT = process.env.PORT || 5000
const html = fs.readFileSync("build/index.html").toString()
const app = express()

app.use('/api', proxy('localhost:3001'))
app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', (req, res) => {
    const context = {}

    const store = createStore(theme, {
        theme: 'white'
    })

    const reactMarkup = (
        <Provider store={store}>
        <StaticRouter
        location={req.url}
        context={context}
      ><App /></StaticRouter></Provider>)
    const app = ReactDOMServer.renderToString(reactMarkup)

    return res.send(
        html.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    )
})

console.log(`listening on ${PORT}`)

app.listen(PORT)