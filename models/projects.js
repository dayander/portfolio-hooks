'use strict';


var mongoose = require('mongoose');


var projectSchema = mongoose.Schema({
    projectName: String,
    companyName: String,
    projectHeading: String,

    challengeHeading: String,
    challenge: String,
    approachHeading: String,
    approach: String,
    outcomeHeading: String,
    outcome: String,
    tags: Array,
    headingImg: {imgPath:String, altText: String},
    address: String








});


var Projects = mongoose.model('Projects', projectSchema);


module.exports = Projects;