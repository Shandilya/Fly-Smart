import requests
import json
from twitter import *
from flask import Flask, jsonify, render_template, request, redirect
from flask_pymongo import PyMongo
import datetime

app = Flask(__name__)

# app.config["MONGO_URI"] = "mongodb://localhost:27017/fly_smart"
app.config["MONGO_URI"] = "mongodb://washu:WashuData1@ds245523.mlab.com:45523/dataanalytics"
mongo = PyMongo(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/index.html")
def indexpage():
    return render_template("index.html")

@app.route("/tweets.html")
def tweets():
    return render_template('tweets.html')

@app.route("/feedback.html")
def getFeedback():
    listings = mongo.db.user_feedback.find().sort("inserted_time", -1).limit(10)
    return render_template('feedback.html', listings=listings)


@app.route("/stats.html")
def stats():
    return render_template('stats.html')

@app.route("/trends.html")
def trends():
    return render_template('trends.html')

@app.route("/team.html")
def team():
    return render_template('team.html')


twitter_header = {'Authorization': 'Bearer 1024005802112286720-tewTubcOAEiWSruFzKspp8oOrkKTeD'}

twitter_token = "1024005802112286720-tewTubcOAEiWSruFzKspp8oOrkKTeD"
twitter_token_secret = "WAQiyuFxAHuFBxhnKZ5pUABrSKtNLe6EMn9JHlVpmzRkR"
twitter_consumer_key = "f8mvOcjx2FW6fmLmrt4ZenOaQ"
twitter_consumer_secret = "TyKX2k9YIvlQjXiVvHINGecWpXqVVNodkmmOjuHlW1WrlBZayX"

t = Twitter(
    auth=OAuth(twitter_token, twitter_token_secret, twitter_consumer_key, twitter_consumer_secret))


@app.route('/getFlightPrediction/<airline>/<month>/<calendarDay>/<weekDay>/<hour>')
def getPrediction(airline,month,calendarDay,weekDay,hour):
    print("Inside getPrediction")
    print("Airline :" +airline)
    print("Month :" +month)
    print("CalendarDay :" +calendarDay)
    print("WeekDay :" +weekDay)
    print("Hour :" +hour)
    response = getModelOutput(airline,month,calendarDay,weekDay,hour)
    print(response)
    return jsonify(response)

@app.route('/submitFeedback/<email_id>/<feedback>')
def submitFeedback(email_id,feedback):
    print("Inside submitFeedback")
    print(email_id)
    print(feedback)
    fs_listings = {"email":email_id , "feedback":feedback, "inserted_time":datetime.datetime.now()}
    listings = mongo.db.user_feedback
    listings.insert_one(fs_listings)
    return getFeedback()

@app.route('/getTweets/<searchKeyword>')
def getTweets(searchKeyword):
    print("Inside getTweets")
    # Search for the latest tweets about #pycon
    response = t.search.tweets(q=searchKeyword,lang="en",tweet_mode='extended')
    print(response)
    return jsonify(response)

def getModelOutput(airline,month,calendarDay,weekDay,hour):
    response = 0
    return response

if __name__ == "__main__":
    app.run(debug=True)
