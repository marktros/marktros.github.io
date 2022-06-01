const express = require("express");
const app = express();
const port = 3000;
const devcert = require("devcert");
const https = require("https");

app.get("*", (req, res) => {
  console.log("headers", req.headers);
  console.log("path", req.route);
  console.log("original path", req.originalUrl);
  res.send("Hello World!");
});

const start = async () => {
  let ssl = await devcert.certificateFor("marktros.com");
  https.createServer(ssl, app).listen(3000);
  console.log("runing on port 3000");
};

start();

/*
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
*/
