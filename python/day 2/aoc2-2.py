res = 0

def isSafe(report):
  first_condition = True
  second_condition = True
  if sorted(report) != report and sorted(report, reverse = True) != report:  
    first_condition = False
  for i in range(1, len(report)):
    if report[i] == report[i-1]:
      second_condition = False
      break
    if abs(report[i] - report[i-1]) > 3:
      second_condition = False
      break
  return first_condition == True and second_condition == True

with open("aoc2.txt", "r") as file:
  for line in file:
    report = list(map(int, line.split()))
    if isSafe(report):
      res += 1
    else:
      for j in range(len(report)):
        new_report = report[:j] + report[j+1:]
        if isSafe(new_report):
          res += 1
          break

print(res)
      

