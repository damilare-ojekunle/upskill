const express = require("express");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT

const usersRoute = require('./routes/user');
const bodyParser = require('body-parser');
const User = require('./models/user')

app.use(bodyParser.json());
// app.use('/api/v1/users', usersRoute);
// Testing all endpoints here then refactor later

app.get('/users', async (req,res) => {
 try {
    const users = await User.findAll();
    res.status(200).json(users)
 } catch (error) {
    console.error(error);
    res.status(500).json({
        message:"Internal Error"
    })
    
 }
})

 app.get('/users/:id', async(req,res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if(user){
            res.json(user);
        }
        else {
           res.status(404).json({
            message: "User  not found"
           })
        }
    } catch (error) {
        res.status(500).json(
            {message: "Internal Server Error"}
        )
    }
 })

app.post('/users', async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Internal server error' });
    }
  });

app.put('/users/:id',async (req,res) => {
    try {
       const user = await User.findByPk(req.params.id);
       if(user){
         await user.update(req.body);
         res.json(user);
       } 
       else{
        res.status(404).json({message:"User not Found "})
       }
    } catch (error) {
        console.error(error);
        
    }

}) 
app.delete('/users/:id',async(req,res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if(user){
            await user.destroy();
            res.json({message: "User deleted successfully"})
        }
        else {
            res.status(404).json({
                message: "User not found "
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:"Internal Server error"
        })
    }
})

app.listen(4500, function (req, res) {
    console.log(`listening on port  `);

})