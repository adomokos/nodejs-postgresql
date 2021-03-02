var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var workedHoursRouter = require('./routes/worked-hours');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/v1/users', usersRouter);
app.use('/v1/users/:user_id/worked_hours', workedHoursRouter);

module.exports = app;
