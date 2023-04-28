import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'gif_website.settings')
django.setup()

from gifs.models import Gif, Category


if __name__ == '__main__':

    print("Populating database")
    
    new_gif = Gif(title='POPULATED',
                  url='https://media.giphy.com/media/SggILpMXO7Xt6/giphy.gif',
                  uploader_name='Yossi')
    
    new_gif.save()