from aiogram import Bot

from django.conf import settings

""" 
Docs: <https://github.com/aiogram/aiogram> 
"""
# init bot
bot = Bot(settings.TELEGRAM_BOT_TOKEN)