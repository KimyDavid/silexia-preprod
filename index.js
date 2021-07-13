import express from 'express';
import http from 'http';
import path from 'path';
import crypto from 'crypto';
import cors from 'cors';
import session from 'cookie-session';
import passport from '#config/passport_local.js';
import fileUpload from 'express-fileupload';

import auth from '#routes/authentication/auth.routes.js';
import admin from '#routes/authentication/admin.routes.js';
import user from '#routes/authentication/user.routes.js';

import sectors from '#routes/content/sector.routes.js';
import types from '#routes/content/type.routes.js';
import sizes from '#routes/content/size.routes.js';
import article from '#routes/content/article.routes.js';
import offre from '#routes/content/offre.routes.js';
import administrative from '#routes/content/administrative.routes.js';
import partners from '#routes/content/partners.routes.js';

import autodiag from '#routes/autodiag/autodiag.routes.js';
import questions from '#routes/autodiag/question.routes.js';
import categories from '#routes/autodiag/category.routes.js';

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

app.use('/v1', auth)
app.use('/v1', admin)
app.use('/v1', user)

app.use('/v1', sectors)
app.use('/v1', types)
app.use('/v1', sizes)
app.use('/v1', article)
app.use('/v1', offre)
app.use('/v1', administrative)
app.use('/v1', partners)

app.use('/v1', autodiag)
app.use('/v1', questions)
app.use('/v1', categories)

var server = http.createServer(app)
server.listen(process.env.PORT)
