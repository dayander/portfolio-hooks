var mongoose = require('mongoose');


var resumeSchema = mongoose.Schema({
    companyName: String,
    jobTitle: String,
    location: String,

    startDate: Date,
    endDate: Date,
    bullets: [String],








});


var Projects = mongoose.model('Projects', projectSchema);


module.exports = Projects;