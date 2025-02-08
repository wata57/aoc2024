import { readFileSync } from "fs";

const data = readFileSync("input.txt", "utf8");

const isNumber = function (char) {
  return !isNaN(char) && char.trim() !== "";
};

let l = 0;
let r = l + 3;
let res = 0

let isEnabled = true

while (r < data.length) {

  if (data.slice(l, r + 1) === "do()") {
    isEnabled = true
    l = r;
    r = l + 3;
  } else if (data.slice(l, r+4) === "don't()") {
    isEnabled = false
    l = r;
    r = l + 3;
  }

  if (data.slice(l, r + 1) === "mul(" && isEnabled) {
    let i = r + 1;
    while (i < data.length) {
      if (!isNumber(data[i]) && data[i] !== "," && data[i] !== ")") {
        break;
      }

      if (data[i] === ")") {
        let parsedData = data.slice(r + 1, i);

          let [left, right] = parsedData.split(",");

          if (isNumber(left) && isNumber(right)) {
              res += left * right
          }

        break;
      }
      i++;
    }
  }
  l++;
  r++;
}

console.log(res)
