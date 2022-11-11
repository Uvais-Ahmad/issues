const Project = require('../models/projects');
const Issue = require('../models/issues');
        // First Controller FOR HOMEsCREEN
module.exports.home = function ( req , res ){
    Project.find({} , function( err , projects ){
        
        res.render('layout',{
            projects : projects
        });
    });
}
        // TO CERATE THE PROJECT FOR ISSUE TRACK
module.exports.create = function( req , res ){
    Project.create( req.body , function(err , project){
        if(err){ console.log('Error occur while creating the project : ',err)}
    })
    res.redirect('/');
}
        // TO REMOVE THE PROJECT
module.exports.destroy = async function( req , res ){

    //Delete All issues also which added on the post i.e. Which issue have projectID= req.params.id it should be deleted
    try{
        let project = await Project.findById(req.params.id);
        console.log('Project to be deleted ',project);
        project.remove();

        await Issue.deleteMany({project : req.params.id });
        return res.redirect('/');
    }
    catch(err){
        console.log('Error while destroy project ',err);
    }
}


