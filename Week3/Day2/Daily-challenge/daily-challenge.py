import math

class Pagination:

    def __init__(self, items: list = None, page_size: int = 10):
        if items is not None:
            self.items = items
        else:
            self.items = []
        self.page_size = page_size
        self.current_idx = 0 # 1st index = 0, первый лист индекс = 0
        self.total_pages = math.ceil(len(self.items) / self.page_size) # value up to whole, sum of pages and sum letters per page (определели количество страниц и сколько букв вывести/стр)

    def get_visible_items(self): # whwrw we are now где находимся в данный момент
        start_idx = self.current_idx * self.page_size # start page * sum letters per page (откуда начинаю страница * количество символов на странице)
        end_idx = start_idx + self.page_size
        return self.items[start_idx: end_idx]

    def go_to_page(self, page_num: int):
        # total_pages = math.ceil(len(self.items) / self.page_size) # value up to whole
        if page_num > self.total_pages or page_num < 1:
            raise ValueError(f'Incorrect page number - {page_num}. Aviable - {self.total_pages}')
        
        self.current_idx = page_num - 1 # work with isx page (работа с индексом листа)

    def first_page(self):
        self.go_to_page(1)
        return self

    def last_page(self):
        self.go_to_page(self.total_pages)
        return self

    def next_page(self):
        self.go_to_page(self.current_idx + 2) # coz its idx
        return self

    def previous_page(self):
        self.go_to_page(self.current_idx) # coz it idx
        return self

# dunder method - double under method
    def __str__(self) -> str:
        # out = ""
        # visible_items = self.get_visible_items()
        # for item in visible_items:
        #     out += f'{item}\n'
        # return out
        return str(self.get_visible_items())

alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)
# p = Pagination()
# print(p.items)
# p.items.extend(alphabetList)
# p = Pagination()
# print(p.items)


p.next_page().next_page().next_page()

print(p)





# import math

# class Pagination:
#     def __init__(self, items=[], pageSize=10):
#         self.pageSize = int(math.trunc(pageSize)) # 
#         self.items = items
#         self.totalPages = 0
#         self.currentPage = 1
#         self.totalPages = (len(items)/math.ceil(pageSize))  #
#         self.totalPages = int(self.totalPages if self.totalPages == math.trunc(
#             self.totalPages) else self.totalPages+1)
#         self.currentDisplayItems = items[0:pageSize]

#     def getVisibleItems(self): # returns a list of items visible depending on the pageSize
#         return (self.currentDisplayItems)

#     def prevPage(self):
#         if self.currentPage > 1:
#             self.currentPage -= 1
#             self.currentDisplayItems = self.items[(
#                 self.currentPage-1)*self.pageSize:(self.currentPage)*self.pageSize]
#             return self

#     def nextPage(self):
#         if self.currentPage < self.totalPages:
#             self.currentPage += 1
#             self.currentDisplayItems = self.items[(
#                 self.currentPage-1)*self.pageSize:self.currentPage*self.pageSize]
#             return self


#     def firstPage(self):
#         self.currentPage = 1
#         self.currentDisplayItems = self.items[(
#             self.currentPage-1)*self.pageSize:self.currentPage*self.pageSize]
#         return self

#     def lastPage(self):
#         self.currentPage = self.totalPages
#         self.currentDisplayItems = self.items[(
#             self.currentPage-1)*self.pageSize:self.currentPage*self.pageSize]
#         return self


#     def goToPage(self, pageNum):
#         if pageNum < 1:
#             self.currentPage=1
#         elif pageNum > self.totalPages:
#             self.currentPage=self.totalPages
#         else:
#             self.currentPage = pageNum
#         self.currentDisplayItems = self.items[(
#             self.currentPage-1)*self.pageSize:self.currentPage*self.pageSize]

# alphabetList = [n for n in "abcdefghijklmnopqrstuvwxyz"]


# p = Pagination(alphabetList, 4)

# print(p.currentDisplayItems)

# print(p.getVisibleItems())
# print(p.pageSize, p.totalPages)
# p.nextPage()
# print(p.getVisibleItems())
# p.nextPage()
# print(p.getVisibleItems())
# p.nextPage()
# print(p.getVisibleItems())

# p.nextPage().nextPage()
# print(p.getVisibleItems())
# p.firstPage()
# print(p.getVisibleItems())
# p.lastPage()
# print(p.getVisibleItems())
# p.goToPage(0)
# print(p.getVisibleItems())
# p.goToPage(2)
# print(p.getVisibleItems())
# p.goToPage(20)
# print(p.getVisibleItems())

# # print(p.getVisibleItems())
# # p.nextPage()
# # print(p.getVisibleItems())
# # p.nextPage()
# # print(p.getVisibleItems())
# # p.nextPage()
# # print(p.getVisibleItems())
# # p.prevPage()
# # print(p.getVisibleItems())
# # p.prevPage()
# # print(p.getVisibleItems())
# # p.prevPage()
# # print(p.getVisibleItems())
# # p.prevPage()
# # print(p.getVisibleItems())
# # p.prevPage()
# # print(p.getVisibleItems())
# # p.prevPage()
# # print(p.getVisibleItems())
# # p.prevPage()
# # print(p.getVisibleItems())
# # p.prevPage()
# # print(p.getVisibleItems())