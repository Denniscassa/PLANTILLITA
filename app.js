var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var inicioRouter = require('./routes/inicio');
var monitoreoRouter = require('./routes/monitoreo');
var asistenciaRouter = require('./routes/asistencia');
var conectadosRouter = require('./routes/conectados');
var recorridoRouter = require('./routes/recorrido');
var tiemposControlRouter = require('./routes/tiemposControl');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/inicio', inicioRouter);
app.use('/monitoreo', monitoreoRouter);
app.use('/asistencia', asistenciaRouter);
app.use('/conectados', conectadosRouter);
app.use('/recorrido', recorridoRouter);
app.use('/tiemposControl', tiemposControlRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page  
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

