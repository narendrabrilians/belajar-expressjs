import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/products", (req, res) => {
  res.send("Hello Products");
});

app.get("/user", (req, res) => {
  res.send("Hello User");
});

app.get("/contact", (req, res) => {
  res.send("Contant");
});

app.listen(3000);
