var express = require("express");

var app = express();

var productAPI = require("./controllers/product.controller");
app.use("/api/products", productAPI);

app.listen(8080);
console.log("Server up and running on port 8080");