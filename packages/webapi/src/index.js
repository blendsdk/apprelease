#!/usr/bin/env node
const express = require('express');
const fs = require("fs");
const path = require("path");
const app = express();
const port = 5000;

const pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), "package.json")).toString());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/version', (req, res) => {
    res.send({ application: pkg.name, version: pkg.version });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});