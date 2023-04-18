const User = require('../models/user')

exports.addUser = async(req,res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({
            message:"User Created",
            data: user
        })     
        
    } catch (error) {
        res.status(400).json({
            error:error.errors[0].message
        })
        
    }

  }

exports.getAllUsers = async(req,res) => {
    try {
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;
const offset = (page -1) * limit;
const users = await User.findAll({limit,offset});
res.status(200).json({
    response:"All users",
    users:users
}) 
        
    } catch (error) {
        console.log(error)
        
    }

}
 exports.getSingleUser = async(req,res) => {
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
 }
 exports.updateUser = async (req,res) =>{
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

 }
 exports.deleteUser = async (req,res) =>{
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

 }