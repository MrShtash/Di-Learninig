import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres' # 'bassketb'
PASSWORD = '' #'cluster'
DATABASE = 'restourant_menu'

connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password = PASSWORD, dbname = DATABASE)

cursor = connection.cursor()

class MenuItem:
    
    def __init__(self, name: str, price: int):
        self.name = name
        self.price = price
    
    def save(self):
        q = f"insert into restourant_menu (name, price) values ('{self.name}', '{self.price}');"
        with connection.cursor() as cursor:
            cursor.execute(q)
            connection.commit()
            return True

    def delete(self):
        q1 = f"delete from restourant_menu where (name = '{self.name}');"
        with connection.cursor() as cursor:
            cursor.execute(q1)
            connection.commit()

    def update(self,old_item): # use old_item like any item that already in menu
        q5 = f"update restourant_menu set name = '{self.name}', price = {self.price} where name = '{old_item.name}' and price = {old_item.price};"
        # q3 = f"update restourant_menu set name = '{self.name}' where name = '{old_item.name}';"
        # q4 = f"update restourant_menu set price = '{self.price}' where price = '{old_item.price}';"
        with connection.cursor() as cursor:
            # cursor.execute(q3)
            # cursor.execute(q4)
            cursor.execute(q5)
            connection.commit()

# 1.1
    # def all():
    #     q6 = f"select * from restourant_menu;"
    #     with connection.cursor() as cursor:
    #         cursor.execute(q6)
    #         result = cursor.fetchall()
    #         connection.commit()
    #         print(result)
    #         # connection.close()

# 1.2
    def all(): #don't use anything coz we need to return all
        q6 = f"select * from restourant_menu;"
        with connection.cursor() as cursor:
            cursor.execute(q6)
            result = cursor.fetchall() # fetchall take everything, need to create new vriable (result)
            connection.commit()
        return(result)

    def get_by_name (name): # use any name to check and search
        q7 = f"select * from restourant_menu where name = '{name}';"
        with connection.cursor() as cursor:
            cursor.execute(q7)
            result = cursor.fetchall()
            connection.commit()
        if result == []:
            return None
        return result
        # if name in items:
        #     with connection.cursor() as cursor:
        #         cursor.execute(q7)
        #         result = cursor.fetchall()
        #         connection.commit()
        # else:
        #     return False

        # q7 = f"select '{self.name}', '{self.price}' from restourant_menu where name = '{self.name}';"        

# burguer = MenuItem('Burguer',35)
# pizza = MenuItem('pizza',40)
# salad = MenuItem('ceazar', 55)
# beer = MenuItem('Corona extra', 15)
# burguer2 = MenuItem('BIG Burguer',100)
# shakshuka = MenuItem('shakshuka', 60)
# vb = MenuItem('Veggie Burger', 37)
# i = MenuItem('Ice', 5)

# burguer.save()
# pizza.save()
# salad.save()
# beer.save()
# burguer2.save()
# shakshuka.save()
# burguer2.delete()
# pizza.update(shakshuka)

# 1.1
# item = MenuItem.all()

# 1.2
# item = MenuItem.all()
# print(item)

# print(MenuItem.get_by_name('pizza'))