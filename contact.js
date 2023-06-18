var con  = require('./connection');

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname )); 

app.get('/', function(req,res){
    res.sendFile(__dirname+'/home.html');
});

con.query(`select * from contact`, (err, result, fields)=>{
    if(err) {
        return console.log(err)
    }
    return console.log(result)
})

app.post('/submit-contact-form', function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var query = req.body.query;
    console.log(name+" "+email+ " "+subject+" "+query);
    con.connect(function(error){
        if(error) throw error;
        //First method to insert
        var sqlInsert = "Insert into contact values('hh','ksmclkmlk@vd','fkncksdnskdnmknme','fef');";
        con.query(sqlInsert, function(error, result){
            if(error) throw error;
            res.send('<script>alert("Submitted successfully!"); window.location.href = "/contact.html"; </script>');
        });

        //second method to insert
        // var sqlInsert = "Insert into contact values(?, ?, ?, ?)";
        // con.query(sqlInsert, [name, email, subject, query], function(error, result){
        //     if(error) throw error;
        //     res.send('<script>alert("Submitted successfully!"); window.location.href = "/contact.html"; </script>');
        // });

        //third method to insert
        // var sqlInsert = "Insert into contact values ?";
        // var values = [
            // [name, email, subject, query]
        // ];
        // con.query(sqlInsert, [values], function(error, result){
        //     if(error) throw error;
        //     res.send('<script>alert("Submitted successfully!"); window.location.href = "/contact.html"; </script>');
        // });

    });

});

app.listen(5500);