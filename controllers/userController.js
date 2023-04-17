const User = require('../models/user')
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
    let userId = req.params.userId;
    const user  =  await User.findByPK({
        where: {
            id:userId
        }
    });
    res.status(200).json({
        user
    })
   } catch (error) {
    res.status(400).json({error})
    console.log(error)
    
   }
 }
  exports.addUser = async(req,res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({
            message:"User Created",
            data: user
        })
         
        
    } catch (error) {
        res.status(400).json({
            error:error
        })
        
    }

  }