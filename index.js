import express from 'express';
import http from 'http';
import path from 'path';
import crypto from 'crypto';
import cors from 'cors';
import session from 'cookie-session';
import passport from './src/config/passport_local.js';
import fileUpload from 'express-fileupload';

import auth from './src/routes/auth.routes.js';
import autodiag from './src/routes/autodiag.routes.js';
import list from './src/routes/list.routes.js';
import article from './src/routes/article.routes.js';

var app = express();

app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(cors({
  "origin": ["http://localhost:3000"],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "credentials":true
}));

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './src/tmp/'
}));

//app.use(express.static('client/build'));
//app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize())
app.use(passport.session())

app.use('/v1', autodiag)
app.use('/v1', auth)
app.use('/v1', list)
app.use('/v1', article)

var server = http.createServer(app)
server.listen(process.env.PORT)
