const express = require("express");
var Twitter = require("twitter");
var cors = require("cors");
const { request } = require("express");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var client = new Twitter({
  consumer_key: "VQ1HQtxIAD14Bh4zLVJQZJb4r",
  consumer_secret: "Y0FoVH13nXtidWcNxYfGq2N15AcRyjaf1pnO1MRFEa11dd7HKV",
  access_token_key: "2869864061-sjmeDehYF6ao21neO1yS0sCOSVSpObUZ7DaYYMb",
  access_token_secret: "JCTaUY7iGTm319KNbP0cGpJvPPWJmBw47cthce7XsRfSE",
});

const app = express();
const port = 8000;
app.use(cors());

var xhr = new XMLHttpRequest();

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

app.get("/getToxcity:tweetText", (req, res) => {
  const params = req.params.tweetText;
  xhr.open("POST", "http://localhost:5000/model/predict", true);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
    }
  }

  xhr.send(params);

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
