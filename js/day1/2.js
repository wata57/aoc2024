import { readFileSync } from "fs";

let fileData = "";

fileData = readFileSync("input.txt", "utf8");

const data = fileData
  .split("\n")
  .map((row) => row.trim())
  .filter((row) => row !== "");

const left = [];
const right = [];

for (let pair of data) {
  const [l, r] = pair.split("   ");
  left.push(Number(l));
  right.push(Number(r));
}

const freq = {};

for (let n of right) {
  freq[n] = (freq[n] || 0) + 1;
}

let res = 0;

for (let num of left) {
  res += num * (freq[String(num)] || 0);
}

console.log(res);
