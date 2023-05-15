from django.shortcuts import render
import twitter
from .forms import MessageForm
from .models import Message

api = twitter.Api(
                consumer_key='',
                consumer_secret='',
                access_token_key='',
                access_token_secret=''
                )

# OAUTH_KEYS = {'consumer_key':consumer_key,
#               'consumer_secret':consumer_secret,
#               'access_token_key':access_token_key,
#               'access_token_secret':access_token_secret}
# auth = tweepy.OAuthHandler(OAUTH_KEYS['consumer_key'], OAUTH_KEYS['consumer_secret'])
# api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)