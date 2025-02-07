
grid = []

with open("input.txt", "r") as file:
  for line in file:
    grid.append(line.strip())

directions = [
  (0, 1),   # Horizontal right
  (0, -1),  # Horizontal left
  (1, 0),   # Vertical down
  (-1, 0),  # Vertical up
  (1, 1),   # Diagonal down-right
  (1, -1),  # Diagonal down-left
  (-1, 1),  # Diagonal up-right
  (-1, -1)  # Diagonal up-left
]


c = 0
rows = len(grid)
cols = len(grid[0])  

def is_valid(x, y):
  if x < 0 or x >= cols:
    return False
  if y < 0 or y >= rows:
    return False
  return True 

def search(x, y, direction):
  dx, dy = direction
  current_x = x
  current_y = y
  for i in range(word_length):
    if not is_valid(current_x, current_y) or grid[current_x][current_y] != word[i]:
      return False
    else:
      current_x += dx
      current_y += dy
  return True
     

for x in range(rows):
  for y in range(cols):
    for direction in directions:
      if search(x, y, direction):
        c += 1   
      

print(c)