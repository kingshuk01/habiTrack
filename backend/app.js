const express = require('express')
const mongoose = require('mongoose')
const Habit  = require('./Models/HabitModel')
const cors = require('cors');  


const app = express()


app.use(express.json())
app.use(cors());


app.get('/',(req,res)=>{    
    res.send('/ se ye aara')
})

app.get('/habits',async(req,res) =>{
    try {
        const habits = await Habit.find({}) 
        res.status(200).json(habits)
    } catch (error) {
        res.status(200).json({message : error.message})
    } 
})

app.post('/habit',async(req,res) =>{
    try {
        const habit  = await Habit.create(req.body)
        res.status(200).json(habit)
    } catch (error) {
        res.status(200).json({message : error.message})
    }
    
})


mongoose.connect('mongodb+srv://kingshuk:kingshuk@habitcluster.aw1misy.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000,()=>{
        console.log('listening');
    })    
    console.log("mongo connected");
}).catch((err)=>{
    console.log(err);
}) 