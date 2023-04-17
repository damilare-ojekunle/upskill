

const router = require('express').Router();
const bodyParser = require('body-parser');
const {getAllUsers,getSingleUser,addUser} = require("../controllers/userController")

router.use(bodyParser.json());

router.get('/',getAllUsers);
router.get('/:userId',getSingleUser);
router.post('/',addUser);


router.get('/all/:id', (req, res) => {
    let { id } = req.params;
    news.findByPk(id).then((cods) => {
        res.json(cods);
    }).catch(err => console.log(err))

});

router.post('/add', (req, res) => {
    news.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }).then((cods) => {
        res.json(cods);
    }).catch((err => console.log(err)));

});

router.delete('/delete/:id', (req, res, next) => {
    let { id } = req.params;
    news.findByPk(id).then((cods) => {
        // if trying to delete accout that does not exit
        if (cods) {
            return cods.destroy().then(() => {
            return res.send('deleted').sendStatus(200);
       })
        
    }
})

});

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