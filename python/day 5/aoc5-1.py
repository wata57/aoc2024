res = []
result = 0
sequences = []
orderings = []
right_sequences = []

with open("input.txt", "r") as file:
  for line in file:
    res.append(line.strip())
for i in range(len(res)):
  if res[i] == "":
    x, y = res[:i], res[i+1:]

for item in x:
  a, b = item.split("|")
  orderings.append((a,b))

for item in y:
  sequences.append(item.split(","))


for sequence in sequences:
  is_correct = True
  for i in range(len(sequence) - 1):
    if (sequence[i], sequence[i+1]) in orderings:
      continue
    else:
      is_correct = False
  if is_correct:
    right_sequences.append(sequence)


for right_sequence in right_sequences:
  middle = int((len(right_sequence) + 1) / 2 - 1)
  result += int(right_sequence[middle])

print(result)

  
  