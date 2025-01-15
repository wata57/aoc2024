left = []
right = []
with open("aoc1.txt", "r") as file:
  res = 0
  for line in file:
    left.append(line.split("   ")[0])
    right.append(line.strip().split("   ")[-1])
  sorted_left = sorted(left)
  sorted_right = sorted(right)
  for i in range(len(left)):
    res += abs(int(sorted_left[i]) - int(sorted_right[i]))
  print(res)



      

