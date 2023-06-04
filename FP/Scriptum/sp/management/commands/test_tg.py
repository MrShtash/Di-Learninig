from django.core.management.base import BaseCommand

import asyncio

from django.conf import settings

from tg_bot.bot import bot as tg_bot

class Command(BaseCommand):
    help = "Send parse test results to telegram"

    def handle(self, *args, **options):
        loop = asyncio.get_event_loop()

        channel_id = '194757893'

        # send message to private channel
        try:
            self.stdout.write(self.style.SUCCESS(f"Try to send message to private channel {channel_id}"))

            loop.run_until_complete(
                tg_bot.send_message(
                    chat_id=channel_id,
                    text='hren',
                    parse_mode='html',
                    disable_web_page_preview=True,
                )
            )

        except Exception as e:
            self.stdout.write(self.style.ERROR(f"Error when sending message to private channel: {e}"))
