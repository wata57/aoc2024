import { readFileSync } from "fs";

let fileData = "";

fileData = readFileSync("input.txt", "utf8");

const data = fileData
  .split("\n")
  .map((row) => row.trim())cd ..
  .filter((item) => item !== "");

const filteredData = [];

for (let line of data) {
  const parsedLine = line.split(" ");
  const sortedLine = [...parsedLine].sort((a, b) => Number(a) - Number(b));
  const reversedLine = [...sortedLine].reverse();

  if (
    JSON.stringify(sortedLine) === JSON.stringify(parsedLine) ||
    JSON.stringify(reversedLine) === JSON.stringify(parsedLine)
  ) {
    filteredData.push(line.split(" "));
  }
}

let res = 0;

for (let filtData of filteredData) {
  let l = 0;
  let r = l + 1;
  let addLine = true;
  while (r < filtData.length) {
    const diff = Math.abs(filtData[r] - filtData[l]);
    if (diff === 0 || diff > 3) {
      addLine = false;
      break;
    }
    l++;
    r++;
  }
  if (addLine) {
    res += 1;
  }
}

console.log(res);
