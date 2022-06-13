"use strict";

const express = require("express");
const {users} = require("../auth/models/index");
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const userRouter = express.Router();
const base =require("./middlewares/base")

userRouter.post("/signup",up)

 async function up (req, res) {

    try {
        console.log( req.body.password)
      req.body.password = await bcrypt.hash(req.body.password, 10);
      console.log( req.body.password)
      let newRecord=req.body;
      const record = await users.create(newRecord);
      res.status(200).json(record);
    } catch (e) {
        console.log(e)
        res.status(403).send('Error Creating User'); }
  };



/**
    let newRecord = req.body;
    let newfood = await food.create(newRecord);
    res.status(201).json(newfood); */

  userRouter.post("/signin",base,async (req, res) => {
    res.status(200).json(req.user);
  
  });

  module.exports = userRouter;