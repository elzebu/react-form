import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import store from '../src/redux/store';
import { StaticRouter } from 'react-router-dom';

import { Provider } from 'react-redux'

import fs from "fs";

import App from "../src/App";

const PORT = process.env.PORT || 5000;

const html = fs.readFileSync("build/index.html").toString();


const app = express();

app.use(express.static("build"));


app.get('/*', (req, res) => {

    const context = {};

    const reactMarkup = (<Provider store={store}>
    <StaticRouter location={req.url} context={context}>
    <App />
    </StaticRouter>
    </Provider>);
    const app = ReactDOMServer.renderToString(reactMarkup);

    return res.send(
        html.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
});

console.log(`listening on ${PORT}`);
app.listen(PORT);