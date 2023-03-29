matrix = ['7i3', 'Tsi', 'h%x', 'i #', 'sM ', '$a ', '#t%', '^r!']

result = ' ' # for add result
for c in range(len(matrix[0])): # check column
    for r in range(len(matrix)): # check rows
        if matrix[r][c].isalpha(): #check the letters, includes register
            result += matrix[r][c] # add letters for result

print(result)