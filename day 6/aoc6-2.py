grid = []
direction = "up"
start = (0, 0)
count = 0
res = {}
direction_swap ={
  "down": "left",
  "left": "up",
  "up": "right",
  "right": "down"
}

def inside_map(x, y):
  if x < 0 or x >= rows:
    return False
  if y < 0 or y >= cols:
    return False
  return True


with open("test.txt", "r") as file:
  for line in file:
    grid.append(line.strip())

rows = len(grid)
cols = len(grid[0])

for xposition in range(rows):
  for yposition in range(cols):
    if grid[xposition][yposition] == "^":
      start = (xposition,yposition)

x, y = start
    
while True:
  if direction == "up":
    if inside_map(x, y+1) and grid[x-1][y] != "#":
      x -= 1
      if (x, y) not in res:
        res[(x,y)] = direction        
    elif inside_map(x, y+1) and  grid[x-1][y] == "#":
      direction = "right"
    else:
      break
  if direction == "right":
    if inside_map(x, y+1) and grid[x][y+1] != "#":
      y += 1
      if (x, y) not in res:
        res[(x,y)] = direction        
    elif inside_map(x, y+1) and  grid[x][y+1] == "#":
      direction = "down"
    else:
      break
  if direction == "down":
    if inside_map(x+1, y) and grid[x+1][y] != "#":
      x += 1
      if (x, y) not in res:
        res[(x,y)] = direction        
    elif inside_map(x+1, y) and  grid[x+1][y] == "#":
      direction = "left"
    else:
      break
  if direction == "left":
    if inside_map(x, y-1) and grid[x][y-1] != "#":
      y -= 1
      if (x, y) not in res:
        res[(x,y)] = direction       
    elif inside_map(x, y-1) and  grid[x][y-1] == "#":
      direction = "up"
    else:
      break
print(res)
print(len(res))

while True:
  

