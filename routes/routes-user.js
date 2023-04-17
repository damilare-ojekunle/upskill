const news = require('../models/new');
const db = require('../config/database');
const router = require('express').Router();
const bodyParser = require('body-parser');



// router.get('/all', (req,res) => {
//     news.findAll()
//     .then(cod => {
//        // console.log(cod);
//         res.sendStatus(200);
//     })
//     .catch( err => console.log(err))

//
router.use(bodyParser.json());

router.get('/all', function (req, res) {
    news.findAll().then((cods) => {
        res.json(cods);
        //console.log(cods);
    }).catch(err => console.log(err))

});


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