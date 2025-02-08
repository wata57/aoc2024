import { readFileSync } from "fs";

const fileData = readFileSync("input.txt", "utf8");
const data = fileData
  .split("\n")
  .map((row) => row.trim())
  .filter((row) => row !== "");

const rows = data.length;
const cols = data[0].length;

const checkDiagDownRight = function (x, y) {
  if (x >= rows - 1 || y >= cols - 1) return false;

  if (data[x + 1][y + 1] == "M") return "M";
  if (data[x + 1][y + 1] == "S") return "S";
  return false;
};

const checkDiagDownLeft = function (x, y) {
  if (x >= rows - 1 || y <= 0) return false;

  if (data[x + 1][y - 1] == "M") return "M";
  if (data[x + 1][y - 1] == "S") return "S";
  return false;
};

const checkDiagUpLeft = function (x, y) {
  if (x <= 0 || y <= 0) return false;

  if (data[x - 1][y - 1] == "M") return "M";
  if (data[x - 1][y - 1] == "S") return "S";
  return false;
};

const checkDiagUpRight = function (x, y) {
  if (x <= 0 || y >= cols - 1) return false;
  if (data[x - 1][y + 1] == "M") return "M";
  if (data[x - 1][y + 1] == "S") return "S";
  return false;
};

let res = 0;

for (let x = 0; x < rows; x++) {
  for (let y = 0; y < cols; y++) {
    if (data[x][y] === "A") {
      if (
        !checkDiagUpLeft(x, y) ||
        !checkDiagDownRight(x, y) ||
        checkDiagUpLeft(x, y) === checkDiagDownRight(x, y)
      )
        continue;

      if (
        !checkDiagUpRight(x, y) ||
        !checkDiagDownLeft(x, y) ||
        checkDiagUpRight(x, y) === checkDiagDownLeft(x, y)
      )
        continue;

      res += 1;
    }
  }
}

console.log(res);
