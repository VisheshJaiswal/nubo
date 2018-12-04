// const express = require("express");
// const app = express();
// const fs = require("fs");
// const path = require("path");

// const indexHTML = (() => {
//   return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
// })();

// app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

// require("./build/dev-server")(app);

// app.get("/", (req, res) => {
//   res.send(indexHTML);
// });


// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`server started at http://localhost:${port}`);
// });

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const fs = require("fs");
const path = require("path");

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
// app.use("/dist", app.static(path.resolve(__dirname, "./dist")));

require("./build/dev-server")(app);

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});