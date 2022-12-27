import express from "npm:express";
import { htmlTemplateGenerator } from "./utils.js";

const app = express();
// app.use(express.json())
app.use(express.urlencoded({extended: true}))

const colors = []



app.get("/", (req, res) => {
    res.send(htmlTemplateGenerator(colors))
});

app.post("/", (req, res) => {
    const color = req.body.inputColor
    colors.push(color)
    console.log("colors => ", colors)
    res.send(htmlTemplateGenerator(colors))
})

app.listen(3000, () => {
  console.log("Express usando Deno")
})

// deno run --allow-net --allow-env --allow-read index.js