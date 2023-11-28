const fs = require("fs");
const path = require("path");

// Create folder
/* fs.mkdir(path.join(__dirname, "test"), {}, err => {
  if (err) throw err;
  console.log("Folder created");
}); */

// Create and write to file
/* fs.writeFile(
  path.join(__dirname, "test", "test.txt"),
  "Hello my name is Zheno",
  err => {
    if (err) throw err;
    console.log("File created");

    // Append to file
    fs.appendFile(
      path.join(__dirname, "test", "test.txt"),
      "I love node.js",
      err => {
        if (err) throw err;
        console.log("File appended");
      }
    );
  }
); */

// Read file
/* fs.readFile(path.join(__dirname, "test", "test.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); */

// Rename file
fs.rename(
  path.join(__dirname, "test", "test.txt"),
  path.join(__dirname, "test", "hello.txt"),
  err => {
    if (err) throw err;
    console.log("File renamed");
  }
);
