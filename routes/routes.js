const { response } = require('express');
const express = require('express');
const Model = require('../models/model');
const router = express.Router();


//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.get('/getDiary', async (req, res) => {
    try {
        const date = req.query["date"];
        const data = await Model.find({ date: date});
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/postDiary', async (req, res) => {
    try {

        Model.updateOne(
            {date:req.body.date}, 
            {answered: "Y",herDiary:req.body.diary}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        })

        console.log(req.body);
    
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})



module.exports = router;
