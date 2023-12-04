const mongoose = require('mongoose')

const habitSchema = mongoose.Schema(
    {
        name : { 
            type: String,
            required : [true, 'enter name']
        }
    },
    {
        timestamps : true 
    }
)


const Habit = mongoose.model('Habit', habitSchema)

module.exports = Habit;

