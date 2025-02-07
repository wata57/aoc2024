import { readFileSync } from "fs";

let fileData = "";

fileData = readFileSync("input.txt", "utf8");

const data = fileData
  .split("\n")
  .map((item) => item.trim())
  .filter((item) => item !== "");

const left = [];
const right = [];
for (let pair of data) {
  const [l, r] = pair.split("   ");
  left.push(Number(l));
  right.push(Number(r));
}

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

let result = 0;

for (let i = 0; i < left.length; i++) {
  result += Math.abs(left[i] - right[i]);
}

console.log(result);
