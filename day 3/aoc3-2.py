stack = []
s = ""

with open("input.txt", "r") as file:
    for line in file:
        i = 0
        while i < len(line):
            if line[i:i+7] == "don't()":
                stack.append("don't()")
                i = i + 7
                continue
            if line[i:i+4] == "do()":
                stack.append("do()")
                i = i + 4
                continue
            if not stack or (stack and stack[-1] == "do()"):
                s += line[i]
            i += 1
print(s)