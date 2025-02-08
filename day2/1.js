import { readFileSync } from "fs";

const fileData = readFileSync("input.txt", "utf8");

const data = fileData
  .split("\n")
  .map((row) => row.trim())
  .filter((row) => row !== "");

const isSorted = function (line) {
  const sortedLine = [...line].sort((a, b) => Number(a) - Number(b));
  const reversedLine = [...line].sort((a, b) => Number(b) - Number(a));

  const strLine = JSON.stringify(line);
  const strSortedLine = JSON.stringify(sortedLine);
  const strReversedLine = JSON.stringify(reversedLine);

  if (strSortedLine === strLine || strReversedLine === strLine) {
    return true;
  }
  return false;
};

const diffIsRight = function (line) {
  let l = 0;
  let r = l + 1;

  while (r < line.length) {
    const diff = Math.abs(line[r] - line[l]);
    if (diff === 0 || diff > 3) {
      return false;
    }
    l++;
    r++;
  }
  return true;
};

let res = 0;

for (let row of data) {
  const line = row.split(" ");
  if (!diffIsRight(line)) continue;
  if (!isSorted(line)) continue;
  res += 1;
}

console.log(res);
