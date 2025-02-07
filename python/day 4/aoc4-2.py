grid = []
c = 0
res = []


directions = [
  (1, 1),   # Diagonal down-right
  (1, -1),  # Diagonal down-left
  (-1, 1),  # Diagonal up-right
  (-1, -1)  # Diagonal up-left
]

with open("input.txt", "r") as file:
  for line in file:
    grid.append(line.strip())

rows = len(grid)
cols = len(grid[0])

def is_valid(x, y):
  if x < 0 or x >= rows:
    return False
  if y < 0 or y >= rows:
    return False
  return True

for x in range(rows):
  for y in range(cols):
    if grid[x][y] == "A":
      letters = {"M": 0, "S": 0}
      diagonals = []
      for dx, dy in directions:
        if not is_valid(x + dx, y + dy):
          break        
        if grid[x + dx][y + dy] == "M":
          letters["M"] += 1
          diagonals.append((x + dx, y + dy))
        elif grid[x + dx][y + dy] == "S":
          letters["S"] += 1
        else:
          break
      if letters["M"] != 2 or letters["S"] != 2:
        continue
      if abs(diagonals[0][0] - diagonals[1][0]) == 2 and abs(diagonals[0][1] - diagonals[1][1]) == 2:
        continue
      c += 1

print(c)
      




