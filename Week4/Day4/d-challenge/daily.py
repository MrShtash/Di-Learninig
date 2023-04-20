import requests
from random import choice
import psycopg2

# url = 'https://restcountries.com/v3.1/all'

# response = requests.get(url)
# print(response.json())

# rand = random.choice(response.json())
# print(rand)
# print(rand['name']['common'])
# print(rand['capitalInfo'])
# print(rand['flags'])

# response_capital = requests.get(api_capital_url)

def get_data(url) -> list[dict]: 
    response = requests.get(url)
    data = response.json()
    return data 

def get_random_instances(data_list: list, n: int):

    instances = []
    for _ in range(n):
        random_inst = choice(data_list)
        instances.append(random_inst)

    return instances

def extract(instance: dict):

    try:
        name = instance['name']['common']
        capital = instance['capital'][0]
        flag_emoji = instance['flag']
        flag_url = instance['flags']['png']
        subregion = instance['subregion']
        population = instance['population']

        return name, capital, flag_emoji, flag_url, subregion, population

    except KeyError:
        return None

def preprocess(instances: list[dict]): 

    preprocessed = []

    for instance in instances:
        preprocessed_inst = extract(instance)
        if preprocessed_inst is None:
            continue
        preprocessed.append(preprocessed_inst)

    return preprocessed

# ------------------- POPULATE DB PART -------------------

HOSTNAME = 'localhost'
USERNAME = 'postgres' 
PASSWORD = ''
DATABASE = 'countries'

connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password = PASSWORD, dbname = DATABASE)

def insert_query(columns_names: list[str], data: tuple, table_name:str) -> str:
    columns = ", ".join(columns_names)
    name, capital, flag_emoji, flag_url, subregion, population = data
    query = f"insert into {table_name} ({columns}) values ('{name}', '{capital}', '{flag_emoji}', '{flag_url}', '{subregion}', {population})"

    return query

columns = ['name', 'capital', 'flag_emoji', 'flag_url', 'subregion', 'population']

def run_change_query(query: str): 
    
    with connection.cursor() as cursor:
        cursor.execute(query)
        connection.commit()
        print("SUCCESS")

url = 'https://restcountries.com/v3.1/all'

data = get_data(url)
random_inst = get_random_instances(data, 10)
clean_instances = preprocess(random_inst)

for clean_inst in clean_instances:
    q = insert_query(columns_names=columns, data=clean_inst, table_name='countries')
    run_change_query(q)