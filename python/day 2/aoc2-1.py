res = 0
with open("aoc2test.txt", "r") as file:
  for line in file:
    report = list(map(int, line.split()))
    isSafe = True 

    if report[1] > report[0]:
        report_dir = "asc"
    elif report[1] < report[0]:
        report_dir = "desc"
    else:
        isSafe = False

    for i in range(1, len(report)):
        diff = report[i] - report[i - 1]

        if diff > 0:
            dir = "asc"
        elif diff < 0:
            dir = "desc"
        else:
            isSafe = False
            break

        if abs(diff) < 1 or abs(diff) > 3 or dir != report_dir:
            isSafe = False
            break

        report_dir = dir

    if isSafe:
        res += 1

print(res)