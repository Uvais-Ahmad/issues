const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    // Give ref Here also bcoz we should be store all issue details in each project
    issues : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Issue'
    }]
},{
    timestamps:true
});

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;