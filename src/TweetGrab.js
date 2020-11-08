import Twitter from "twitter";
import Button from "@material-ui/core/Button";

function TweetGrab() {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={getTweets}>Test Twitter</Button>
    </div>
  );
}

function getTweets() {
  var client = new Twitter({
    consumer_key: "VQ1HQtxIAD14Bh4zLVJQZJb4r",
    consumer_secret: "Y0FoVH13nXtidWcNxYfGq2N15AcRyjaf1pnO1MRFEa11dd7HKV",
    access_token_key: "2869864061-sjmeDehYF6ao21neO1yS0sCOSVSpObUZ7DaYYMb",
    access_token_secret: "JCTaUY7iGTm319KNbP0cGpJvPPWJmBw47cthce7XsRfSE",
  });

  var params = { screen_name: "realDonaldTrump" };

  client.get("statuses/user_timeline", params, function (
    error,
    tweets,
    response
  ) {
    if (!error) {
      console.log(tweets);
    }
  });
}

export default TweetGrab;
