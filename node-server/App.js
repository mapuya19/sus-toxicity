const express = require("express");
var Twitter = require("twitter");
var cors = require("cors");
const { request } = require("express");

var client = new Twitter({
  consumer_key: "VQ1HQtxIAD14Bh4zLVJQZJb4r",
  consumer_secret: "Y0FoVH13nXtidWcNxYfGq2N15AcRyjaf1pnO1MRFEa11dd7HKV",
  access_token_key: "2869864061-sjmeDehYF6ao21neO1yS0sCOSVSpObUZ7DaYYMb",
  access_token_secret: "JCTaUY7iGTm319KNbP0cGpJvPPWJmBw47cthce7XsRfSE",
});

const app = express();
const port = 8000;
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/getTweets/:screen_name", (req, res) => {
  const params = req.params.screen_name;

  client.get("statuses/user_timeline", {screen_name: `${req.params.screen_name}`}, function (
    error,
    tweets,
    response
  ) {
    if (!error) {
      res.send(tweets);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
