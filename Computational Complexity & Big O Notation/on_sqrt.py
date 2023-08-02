# quadratic - complexity o(n^2) - bad
## for each action doing it twice

def quadratic_algo(items: list):
    for item in items:
        for item2 in items:
            print(item, ' ', item2)

a_list = [1,2,3,4]
quadratic_algo(a_list) 