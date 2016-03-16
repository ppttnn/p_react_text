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

app.get("/", function  (req, res) {
  let html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="renderer" content="webkit">
        <meta http-equiv="Cache-Control" content="no-siteapp">
        <meta name="keywords" content="bigdata,Chinese enterprises,U.S. Commercial Service,Registration,Correlation">
        <meta name="description" content="Cnbizcheck help you know more about Chinese enterprises, reduce the risk and build trust.">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=3">
        <title>CBC</title>
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="apple-mobile-web-app-title" content="Cnbizcheck">
        <meta name="msapplication-TileColor" content="#0e90d2">
      </head>
      <body>
        <div id="main">login...</div>
        <script type="text/javascript" src="/assets/app/js/app.min.js"></script>
      </body>
    </html>
  `;
  res.end(html);
})

const server = app.listen(LISTEN_PORT, function () {
  console.log("The app is starting on port: " + LISTEN_PORT);
})
