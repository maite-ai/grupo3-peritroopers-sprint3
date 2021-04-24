const express = require("express");
const app = express();
const port = process.env.PORT;
const path = require("path");

const publicPatch = path.resolve(__dirname, "./public");

app.use(express.static(publicPatch));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {res.render("index")});

app.get("/register", (req, res) => { res.render("./users/register") });

app.get("/productCart", (req, res) => { res.render("productCart") });

app.get("/login", (req, res) => { res.render("./users/login") });

app.get("/productDetail", (req, res) => { res.render("./products/productDetail") });

app.get("/create", (req, res)=>{ res.render("./products/createProduct") });

app.get("/edit", (req, res)=>{ res.render("./products/editProduct") });

app.get("/faq", (req, res) => { res.render("faq") });

app.listen(port || 3030, () => {
    console.log("El servidor está corriendo con éxito");
});