left = []
right = {}
res = 0

with open("aoc1-1.txt", "r") as file:
  for line in file:
    x, y = line.strip().split("   ")
    left.append(x)
    if y in right:
      right[y] += 1
    else:
      right[y] = 1 

for n in left:
  if n in right:
    res += int(n) * int(right[n])
print(res)




      

