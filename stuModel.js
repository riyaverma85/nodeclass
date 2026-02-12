const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name : {
        rollno : Number,
        name : String,
        class : String,
        fees : Number
    }
})
    
module.exports = mongoose.model("student",studentSchema);