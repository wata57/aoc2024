allowed_chars = "0123456789,"
res = 0
with open("input.txt", "r") as file:
    for line in file:
        for i in range(len(line)):
            if line[i:i+4] == "mul(":
                j = i + 4
                while line[j] in allowed_chars and line[j] != ")":
                  j += 1
                try:
                  x, y = line[i+4:j+1].split(",")
                except:
                  continue
                if y[-1] != ")":
                    continue
                else:
                    res += int(x)* int(y[:-1])

print(res)