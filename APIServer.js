var express = require('express');
const MongoStore = require('connect-mongo')
var app = express();

// APIs
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');






const options = {useNewUrlParser: true};


const dbURI = "mongodb://dayander:Burton12!@cluster0-shard-00-00-ujeul.mongodb.net:27017,cluster0-shard-00-01-ujeul.mongodb.net:27017,cluster0-shard-00-02-ujeul.mongodb.net:27017/portfolio?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
mongoose.connect(dbURI);


var Contact = require('./models/contact.js');
var Projects = require('./models/projects.js');
var Post = require('./models/post.js');


var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log('before mongo connection');
const db = mongoose.connection;



db.on('error', console.error.bind(console, '# MongoDB connection error:'));

app.get('/images', (req,res)=>{
    const imgFoler = __dirname + '/public/images';
    //get file system
    const fs = require('fs');

    //Read all files in system
    fs.readdir(imgFoler, (err, files)=>{
        if(err){
            return console.log(err);
        }
        const filesArr = [];
        //Iterate all images in dir
        files.forEach((file)=>{
            filesArr.push({name: file});
        })
        res.json(filesArr)
    })

})




app.get('/projects', function(req, res){




    Projects.find(function(err, projects){
        if(err){
            throw err;
        }

        res.json(projects)
    })
});

app.post('/project', function (req, res) {

    console.log(req.body)


    const project = req.body


    Projects.create(project, function (err, project) {

        if(err){
            throw err
        }


        res.json(project)
    })

})

app.get('/projects/:projectName', function(req, res){
    var name = req.params.projectName;

    Projects.findOne(({projectName: name}),function(err, projects){
        if(err){
            throw err;
        }

        res.json(projects)
    })
});

app.post('/contact', function(req, res){

    var contact = req.body;
    Contact.create(contact, function(err, contact){
        if(err){
            throw err;
        }




        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'andersonday1444@gmail.com',
                pass: 'aday1444'
            }
        });

        var mailOptions = {
            from: contact.email,
            to: 'dayander@msu.edu',
            subject: 'From Portfolio',
            text: contact.message
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log('email', error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });




        res.json(contact);
    })

});

app.get('/posts', function(req, res){



    Post.find(function(err, posts){

        if(err){
            throw err;
        }

        res.json(posts)
    })
});

app.get('/posts/:title', function(req, res){

    var name = req.params.title;
    name = '/'+ name;

    Post.findOne(({'slug': name}),function(err, post){
        if(err){
            throw err;
        }


        res.json(post)
    })
});

app.post('/post', function(req, res){

    var post = req.body;

    console.log(post);
    Post.create(post, function(err, post){
        if(err){
            throw err;
        }
        res.json(post);
    })

});

app.post('/insert', function (req, res) {
    console.log("hey")
})

app.listen(4001, function(err){
    if(err){
        return console.log(err);
    }
    console.log('API Sever is listening on http://localhost:4001');
});