import express from "express";

const LISTEN_PORT = "3005";

const app = express();

app.get("/json", function (req, res, next) {
  let user = {
    user: "ppttnn"
  };
  res.jsonp(user);
})

app.use(express.static('./dist'));

app.get("/index.html", function  (req, res) {
  let html = `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div id="main">login...</div>
      </body>
    </html>
  `;
  res.end(html);
})

const server = app.listen(LISTEN_PORT, function () {
  console.log("The app is starting on port: " + LISTEN_PORT);
})
