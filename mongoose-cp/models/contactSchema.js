const mongoose = require ('mongoose');
const contactSchema = mongoose.Schema(
    {
        name : {String, required : true },
        age : number ,
        favouriteFoods : arrayofstrings ,
    }
)
const Contact = mongoose.model('Contact', contactSchema)
module.exports =Contact 