const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    project : {
        // if you add required feild here then it show error about Validation of project
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Project'
    },
    title : {
        type : String,
        required : true

    },
    description : {
        type : String

    },
    label : {
        type :  []
    },
    author : {
        type : String,
        required : true
    }
},{
    timestamps : true
});

const Issue = mongoose.model('Issue',issueSchema);
module.exports = Issue;