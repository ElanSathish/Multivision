
/*Calling all the Frameworks*/
var express = require('express'),
    stylus = require('stylus'),
    morgan = require('morgan'),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose');

/*Assigning environment if not set up by node default then the value will be assigned as "development"*/
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/*Creating the application*/
var app = express();
function compile(str, path){
    return(stylus(str).set('filename', path));
};

/*Express Configure*/
    app.set('views', __dirname + '/server/views');
    app.set('view engine','jade' );

//Depricated: app.use(logger());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(morgan('combined'));
    app.use(stylus.middleware(
        {
            src: __dirname+'/public',
            compile: compile
        }
    ));
    app.use(express.static(__dirname+'/public'));

/*Mongoose Database*/
if(env === 'development'){
mongoose.connect('mongodb://localhost/multivision');
}
else
{
    mongoose.connect('mongodb://eelan:multivision@ds061954.mongolab.com:61954/multivision');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback(){
    console.log("Mongodb opened");
});

/*Creating Schema*/
var mongooseSchema = mongoose.Schema({message: 'string'});
var Message = mongoose.model('Message', mongooseSchema);
var mongoMessage;
Message.findOne().exec(function (err, messageDoc){
    mongoMessage = messageDoc.message;
});


/*Page Rendering*/
app.get('/partials/:partialPath', function(req, res){
 res.render('partials/' + req.params.partialPath);
 console.log("Got the request");
 });

app.get('*', function(req, res){
    res.render('index', {
        mongoMessage: mongoMessage
    });
});



/*Port Assigning*/
var port = process.env.PORT || 3030;
app.listen(port);

/*Logging to the Console*/
console.log("server listening on port.."+ port + "...");