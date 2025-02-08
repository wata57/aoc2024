import { readFileSync } from "fs";
const fileData = readFileSync("input.txt", "utf8").trim();

const sections = fileData.split(/\r?\n\r?\n/);

if (sections.length < 2) {
  throw new Error("File format is incorrect: missing sections.");
}

const rules = sections[0]
  .split("\n")
  .map((line) => line.split("|").map(Number));
const orders = sections[1]
  .split("\n")
  .map((line) => line.split(",").map(Number))
  .filter((line) => line !== "");

let res = 0;

for (let order of orders) {
  let isSafe = true;
  for (let i = 1; i < order.length; i++) {
    if (
      !rules.some((rule) => rule[0] === order[i - 1] && rule[1] === order[i])
    ) {
      isSafe = false;
    }
  }
  if (isSafe) {
    const mid = Math.floor(order.length / 2);
    res += order[mid];
  }
}

console.log(res);
