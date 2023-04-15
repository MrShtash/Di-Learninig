# 1
import requests

response = requests.get('http://google.com/')
# response1 = requests.get('https://www.yandex.ru') # return loading web-site time
print(response.elapsed)

# 2
# import requests, time

# def decor_time(fn):
#     def wraper(*args, **kwargs):
#         time1=time.time()
#         fn(*args,**kwargs)
#         time2=time.time()
#         print (f"The execution time of the function was: {time2-time1}")
#     return(wraper)

# @decor_time
# def requst_fn(url):
#     respose=requests.get(url)
# url_list=['https://www.yandex.ru','https://www.google.com','https://adobe.com','https://www.ozon.ru','https://www.wildberries.ru']
# for p in url_list:
#     print (f"Look for {p}")    
#     requst_fn(p)