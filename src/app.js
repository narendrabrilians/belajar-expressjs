import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/products", (req, res) => {
  res.send("Hello Products");
});

app.listen(3000);
