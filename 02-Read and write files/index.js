const fs = require("fs").promises;
const path = require("path");

async function fileOps() {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    await fs.unlink(path.join(__dirname, "files", "starter.txt"));

    await fs.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data);
    await fs.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you"
    );
    await fs.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    const newData = await fs.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
}
fileOps();

/* fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (error, data) => {
    if (error) throw error;
    console.log(data);
  }
); */
/* 
console.log("Hello...");

fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Nice to meet you",
  error => {
    if (error) throw error;
    console.log("Write complete");

    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "\n\nYes it is. ",
      error => {
        if (error) throw error;
        console.log("Append complete");

        fs.rename(
          path.join(__dirname, "files", "reply.txt"),
          path.join(__dirname, "files", "newReply.txt"),
          error => {
            if (error) throw error;
            console.log("Rename complete");
          }
        );
      }
    );
  }
);
 */

process.on("uncaughtException", error => {
  console.error(`There was an uncaught error: ${error}`);
  process.exit(1);
});
