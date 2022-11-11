const Project = require('../models/projects');
const Issue = require('../models/issues');

// It show the Project and all issues associated with project

module.exports.view = async function( req , res ){

    try{
        let project = await Project.findById(req.params.id ).populate('issues');

        return res.render('viewProject',{
            project : project,
            issues : project.issues
        });
    }
    catch(err){
        console.log('Error while view : ',err);
    }
    
}
// this add issues in db to the Project refrence which is viewed
module.exports.addIssue = async function( req , res ){
    
    try{
        //find the project to add issue
        let project =await Project.findById(req.body.project);
        //Now add Issue in database
        await Issue.create(req.body ,async function( err , issue ){
            if(err){console.log('Error occur while adding Issue : ',err)}
            //add issue in ProjectSchema also
            await project.issues.push(issue);
            await project.save();

            return res.redirect('back');
        });
    }
    catch(err){
        console.log('Error while addIssue : ',err);
    }
}

// 
module.exports.filter = async function( req , res){
    let projId = req.params.id
    //filter all issues associated with current view project
    let project = await Project.findById(projId);
    let issue;
    if(req.body.hasOwnProperty('labels')){
        //$in populate the array and compare with passing array element
        issue = await Issue.find({project : projId , label : { "$in" : req.body.labels} });
    }
    else{
        issue = await Issue.find({author:req.body.author , project : projId});
    }
    console.log('Issue : ',issue)
    
    return res.render('viewProject',{
        project : project,
        issues : issue
    });

    // return res.redirect('back');
}

// search issue by name out of all issues associated with current project
module.exports.search = async function( req , res){
    console.log('Req.body of search : ',req.body);

    let projId = req.params.id
    let project = await Project.findById(projId);
    let issue = await Issue.find({author:req.body.search , project : projId});
    console.log('Issue : ',issue)

    return res.render('viewProject',{
        project : project,
        issues : issue
    });

    // return res.redirect('back');

}