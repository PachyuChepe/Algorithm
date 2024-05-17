const fs = require("fs");
const path = require("path");

const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "input.txt");
const input = fs.readFileSync(filePath).toString().trim();
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

const surprisedUsername = input + "??!";


console.log(surprisedUsername)
