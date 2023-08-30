//dependencies
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mysql=require('mysql');


//define the express operation
const app=express();
const port=3005;

//defining the cors -cross origin by reciving the data in json format
app.use(cors());
app.use(bodyParser.json());

//establish the connection with the dB
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'abcdef',
    database:'clientmanagement'    
    }
);

//verifying whether db is connected or not
db.connect(err=>{
    if(err){
        console.error('connection is not established with the dB',err);
    }
    else{
        console.log('Connected to db')
    }    
});

// Define your API routes here

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


    
    
