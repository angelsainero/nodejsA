var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middlewares
app.use(logger("dev")); //el que hace log en la consola
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.locals.title = 'NodeApp';  //si queremos que el titulo sea para todos los renders.

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));



  //ejemplo
  app.use("/prueba", (req, res, next) => {
    console.log("llegó una petición a /prueba");
    next();
  });

  //ejemplo 1
  app.get('/22', (req,res,next) =>{
    next(createError(418));
  })


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
