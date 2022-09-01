//initializer
const express = require("express");
const app = express();
const budget = require("./models/budget");
let bankAccount = 0;

app.use(express.urlencoded({extended: false}));


app.get("/", (req, res)=>{
    res.send("yayyy more labs lol");
});

app.get("/budgets", (req, res)=>{
    res.render("budget_index.ejs", {
        budget, bankAccount,
    });
});


app.get("/budgets/new", (req, res)=>{
    res.render("new.ejs");
});


app.post("/budgets", (req, res)=>{
    budget.push(req.body);
    res.redirect("/budgets");
})



app.get("/budgets/:index", (req, res)=>{
    res.render("budget_show.ejs", {
        budget : budget[req.params.index],
    });
});

//Listen to port 3000.
app.listen(3000);

