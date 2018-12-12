const debug = require('debug')('freelancer:lib:apps:homepage:app');
const serveStatic = require('serve-static');
const express = require('express');
const path = require('path');

const app = express();

app.use(serveStatic(path.join(process.cwd(), 'public/apps/homepage/static')));
app.use(serveStatic(path.join(process.cwd(), 'public/apps/homepage/custom')));

module.exports = app;