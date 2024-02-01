var express = require("express");

var app = express();

//  listen()メソッドを実行して3000番ポートで待ち受け
var port = process.env.PORT || 3000
var server = app.listen(port, function () {
    console.log("Node.js is listening to PORT:" + server.address().port);
});

//  Hello Worldを表示
app.get("/", function (req, res, next) {
    res.send("Hello World Change!!zzz");
});
