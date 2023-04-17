import express from "express";
import { createServer } from "node:http";
import { resolve } from "node:path";
import cors from "cors";

const app = express();

createServer(app).listen(4399, () => {
  console.log("stand by");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(resolve(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "./pages"));

app.post("/", (req, res) => {
  res.render("demo");
});
app.get("/", (req, res) => {
  res.render("index");
});
