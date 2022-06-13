'use strict';
const server=require('./src/server')
require("dotenv").config(); 
let PORT = process.env.PORT || 3030;


const { db } = require("./src/auth/models/index");

db.sync()
    .then(() => {
        // start();
        server.start(PORT);
    })
    .catch(console.error);
