"use strict";


const {users} = require("../models/index");
const bcrypt = require('bcrypt');
const base64 = require('base-64');

async function base(req,res,next)
{

    
        let basicHeaderParts = req.headers.authorization.split(' ');  
        let encodedString = basicHeaderParts.pop();  
        let decodedString = base64.decode(encodedString);
        let [username, password] = decodedString.split(':'); 
      
        console.log(username);
        console.log(password)
        try {
          const user = await users.findOne({ where: { username: username } });

          const valid = await bcrypt.compare(password, user.password);
          if (valid) {
           req.user=user;
            next();

          }
          else {
          next("Invalid user")
          }
        } catch (error) { res.status(403).send('Invalid Login'); }
      

}

module.exports =base;