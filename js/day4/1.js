import { readFileSync } from "fs";

const fileData = readFileSync("input.txt", "utf8");
const data = fileData
  .split("\n")
  .map((row) => row.trim())
  .filter((row) => row !== "");

const rows = data.length;
const cols = data[0].length;

const checkLeft = function (x, y) {
  if (y < 3) {
    return false;
  }

  let word = "";
  for (let i = y; i > y - 4; i--) {
    word += data[x][i];
  }
  if (word === "XMAS") {
    return true;
  }
  return false;
};

const checkUp = function (x, y) {
  if (x < 3) return false;

  let word = "";
  for (let i = x; i > x - 4; i--) {
    word += data[i][y];
  }
  if (word === "XMAS") {
    return true;
  }
  return false;
};

const checkDown = function (x, y) {
  if (x > rows - 4) return false;

  let word = "";
  for (let i = x; i < x + 4; i++) {
    word += data[i][y];
  }
  if (word === "XMAS") {
    return true;
  }
  return false;
};

const checkRight = function (x, y) {
  if (y > cols - 3) {
    return false;
  }

  let word = "";
  for (let i = y; i < y + 4; i++) {
    word += data[x][i];
  }
  if (word === "XMAS") {
    return true;
  }
  return false;
};

const checkDiagDownRight = function (x, y) {
  if (x > rows - 4 || y > cols - 4) {
    return false;
  }

  let word = "";

  let i = 0;
  while (i < 4) {
    word += data[x + i][y + i];
    i++;
  }

  if (word === "XMAS") {
    return true;
  }
  return false;
};

const checkDiagDownLeft = function (x, y) {
  if (x > rows - 4 || y < 3) {
    return false;
  }

  let word = "";

  let i = 0;
  while (i < 4) {
    word += data[x + i][y - i];
    i++;
  }

  if (word === "XMAS") {
    return true;
  }
  return false;
};

const checkDiagUpLeft = function (x, y) {
  if (x < 3 || y < 3) {
    return false;
  }

  let word = "";

  let i = 0;
  while (i < 4) {
    word += data[x - i][y - i];
    i++;
  }

  if (word === "XMAS") {
    return true;
  }
  return false;
};

const checkDiagUpRight = function (x, y) {
  if (x < 3 || y > cols - 4) {
    return false;
  }

  let word = "";

  let i = 0;
  while (i < 4) {
    word += data[x - i][y + i];
    i++;
  }

  if (word === "XMAS") {
    return true;
  }
  return false;
};

let res = 0;

for (let x = 0; x < rows; x++) {
  for (let y = 0; y < cols; y++) {
    if (data[x][y] === "X") {
      if (checkLeft(x, y)) res++;
      if (checkRight(x, y)) res++;
      if (checkDiagUpLeft(x, y)) res++;
      if (checkDiagUpRight(x, y)) res++;
      if (checkDiagDownLeft(x, y)) res++;
      if (checkDiagDownRight(x, y)) res++;
      if (checkDown(x, y)) res++;
      if (checkUp(x, y)) res++;
    }
  }
}

console.log(res);
