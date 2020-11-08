import tweepy
import re
import json
import sys

#one command line argument for username
handle = ""
if len(sys.argv)>1:
    handle = sys.argv[1]

consumer_key = "VQ1HQtxIAD14Bh4zLVJQZJb4r"
consumer_secret = "Y0FoVH13nXtidWcNxYfGq2N15AcRyjaf1pnO1MRFEa11dd7HKV"

access_token = "2869864061-sjmeDehYF6ao21neO1yS0sCOSVSpObUZ7DaYYMb"
access_token_secret = "JCTaUY7iGTm319KNbP0cGpJvPPWJmBw47cthce7XsRfSE"

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

l = []

public_tweets = api.user_timeline(handle)

for tweet in public_tweets:
    if tweet.text[:2] != "RT":
        l.append(tweet.text.strip())

d = {"text":l}
final_form = open("final_form","w")
json.dump(d,final_form)
final_form.close()

##
##    Twitter Keys
##
##API Key:
##VQ1HQtxIAD14Bh4zLVJQZJb4r
##
##API Secret Key:
##Y0FoVH13nXtidWcNxYfGq2N15AcRyjaf1pnO1MRFEa11dd7HKV
##
##Bearer Token:
##AAAAAAAAAAAAAAAAAAAAAGkiJgEAAAAAfY%2BGaNnVJyIkGbVvMU63WdvX60E%3DeQt5f0t7Bjnzgf2hKd6WIQmBagLJaI53Sfnb28sgj8u9QyTFNg
##
##Access Token: 
##2869864061-sjmeDehYF6ao21neO1yS0sCOSVSpObUZ7DaYYMb
##
##Access Token Secret:
##JCTaUY7iGTm319KNbP0cGpJvPPWJmBw47cthce7XsRfSE
