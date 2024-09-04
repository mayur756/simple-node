const express = require('express');
const dbconnact = require('./db');
const User = require('./user.schema');
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Node.js API");
})
app.get("/users", async (req, res) => {
    let data = await User.find()
    res.send(data);
})

app.post("/users/create", async (req, res) => {
    let data = await User.create(req.body)
    res.send(data);
});
app.patch("/users/:id", async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndUpdate(req.body)
    res.send(data);
});
app.delete("/users/:id", async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndDelete(req.body)
    res.send(data);
});

app.get("/:id", async (req, res) => {
    let { id } = req.params
    let data = await User.findById(id)
    res.send(data);
})
app.listen(8090, (req, res) => {
    console.log("listening on port 8090");
    dbconnact();
})