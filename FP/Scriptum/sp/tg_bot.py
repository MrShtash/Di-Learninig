# import logging
# from django.db.models.signals import post_save
# from django.dispatch import receiver
# from aiogram import Bot
# from telegram import Bot
# from .models import Project, Company

# logging.basicConfig(level=logging.INFO)

# bot_token = '5869913658:AAFD72OPZzvOTfbHPwNzXsGlxafWXDXSpwA'
# bot = Bot(token=bot_token)

# @receiver(post_save, sender=Project)
# def new_project_handler(sender, instance, created, **kwargs):
#     if created:
#         project = instance
#         company = project.company

#         manager_chat_id = '194757893'

#         message_text = f"Hi, you have a new customer {company.name}. They paid {project.payment_amount} shekels. Don't forget to call them within 1 hour. Details are available on your CRM."
#         bot.send_message(chat_id=manager_chat_id, text=message_text)

# if __name__ == '__main__': # Start the bot
#     bot.run_polling()



import logging
from telegram import Bot
from telegram.ext import Updater, CommandHandler
from .models import Project, Company

logging.basicConfig(level=logging.INFO) # set up logging

bot_token = '5869913658:AAFD72OPZzvOTfbHPwNzXsGlxafWXDXSpwA'
bot = Bot(token=bot_token)

def start_handler(update, context): # def the command handler
    context.bot.send_message(chat_id=update.effective_chat.id, text="Bot is running!")

updater = Updater(token=bot_token, use_context=True) # set up the updater and dispatcher
dispatcher = updater.dispatcher
dispatcher.add_handler(CommandHandler('start', start_handler))

updater.start_polling()







# import telegram
# from django.shortcuts import render
# from django.conf import settings
# from django.views import View
# from telegram.ext import (
#                         Updater,
#                         CommandHandler,
#                         CallbackContext
#                         )
# from .models import (
#                     Project,
#                     # Company,
#                     # Cash
#                     )

# bot_token = '5869913658:AAFD72OPZzvOTfbHPwNzXsGlxafWXDXSpwA'
# bot = telegram.Bot(token=bot_token)

# def send_notification(chat_id, company_name, payment_amount):
#     print('helloooo')
#     message = f"Hi, you have a new customer {company_name}. They paid {payment_amount} shekels. Don't forget to call them within 1 hour. Details are available on your CRM."
#     bot.send_message(chat_id=chat_id, text=message)

# def new_project_handler(update: telegram.Update, context: CallbackContext):
#     print ('message')
#     project_id = context.args[0] # details of the new project from  DB or input
#     project = Project.objects.get(id=project_id)
#     company_name = project.company.name
#     payment_amount = project.cash_amount

#     employee_chat_id = '194757893'

#     send_notification(chat_id=employee_chat_id, company_name=company_name, payment_amount=payment_amount)

# # Set up the command handler
# updater = Updater(token=bot_token, use_context=True)
# dispatcher = updater.dispatcher
# dispatcher.add_handler(CommandHandler('newproject', new_project_handler))












# def new_project_notification(project):
#     employee_chat_id = '194757893'  # Replace with the actual chat ID of the manager

#     send_notification(
#         chat_id=employee_chat_id,
#         company_name=project.company.name,
#         payment_amount=project.deposit.cash
#     )

# def project_post_save(sender, instance, created, **kwargs):
#     if created:
#         new_project_notification(instance)

# # Connect the post_save signal to the project_post_save function
# Project.post_save.connect(project_post_save)






# def send_notification(chat_id, company_name, payment_amount):
#     message = f"Hi, you have a new customer ({company_name}). They paid {payment_amount} shekels. Don't forget to call them within 1 hour. Details are available on your CRM."
#     bot.send_message(chat_id=chat_id, text=message)

# def new_project_handler(update, context):
#     # Retrieve the project details from the database
#     project_id = context.args[0]  # Assuming you pass the project ID as an argument
#     try:
#         project = Project.objects.get(id=project_id)  # Retrieve the project object from the database

#         company_name = project.company.name
#         payment_amount = project.deposit.cash

#         employee_chat_id = '194757893'  # Replace with the actual chat ID of the manager

#         send_notification(chat_id=employee_chat_id, company_name=company_name, payment_amount=payment_amount)
#     except Project.DoesNotExist:
#         # Handle the case when the project does not exist
#         context.bot.send_message(chat_id=update.effective_chat.id, text="Invalid project ID.")

# # Set up the command handler
# updater = Updater(token=bot_token, use_context=True)
# dispatcher = updater.dispatcher
# dispatcher.add_handler(CommandHandler('newproject', new_project_handler, pass_args=True, pass_context=True))