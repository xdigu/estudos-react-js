const express = require("express");
const path = require("path");

const app = express();
const port = 4000;

const baseDir = path.resolve(__dirname, "build");

app.use(express.static(baseDir));

app.get("*", (req, res) => res.sendFile("index.html", { root: baseDir }));

app.listen(port, () =>
  console.log(`Server is listen http://localhost:${port}`)
);
