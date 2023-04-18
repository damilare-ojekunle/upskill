const router = require('express').Router();
const bodyParser = require('body-parser');
const {getAllUsers,getSingleUser,addUser,updateUser,deleteUser} = require("../controllers/userController")

router.use(bodyParser.json());

router.get('/',getAllUsers);
router.get('/:userId',getSingleUser);
router.post('/',addUser);
router.put('/',updateUser);
router.delete('/',deleteUser);





// router.delete('/delete/:id', (req, res, next) => {
//     let { id } = req.params;
//     news.findByPk(id).then((cods) => {
//         // if trying to delete accout that does not exit
//         if (cods) {
//             return cods.destroy().then(() => {
//                 return res.send('deleted').sendStatus(200);

//             })
            
//      }



//     });

   


// });



module.exports = router