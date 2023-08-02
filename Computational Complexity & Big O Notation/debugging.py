def do_problem():
    a = 1 + 2
    b = 0
    try:
        a / b
    except ZeroDivisionError:
        pass


def some_func():
    do_problem()
    print('BLA')

some_func()