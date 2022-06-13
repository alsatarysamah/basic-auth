
'use strict';

require('dotenv').config();
const port=process.env.port || 3030;
const notFoundHandler = require("./errorHandlers/404");
const errorHandler = require("./errorHandlers/500"); 
// const foodRoutes = require("./routs/food");
// const clothesRoutes=require("./routs/clothes")
const userRouter = require("../src/auth/router");
const express= require ('express');
const app = express();

app.use(express.json());

app.use(userRouter);
// app.use(clothesRoutes);

app.get("/",(req,res) => {
    res.send("Home");
})
app.use("*",notFoundHandler);
app.use(errorHandler);
function start(PORT) {
    app.listen(PORT, () => {
        console.log(`Listening and Running on port ${PORT}`);
    });
}

module.exports ={

    start:start,
    app: app,
}