const express = require("express")                               //import express module
const bodyParser = require('body-parser')                       // import bodyParser module (helps accesssing the form data)
 
const app = express()
app.use(bodyParser.urlencoded({extended: true}))               // lets access the form data using "request.body"

app.get("/", function(request,response){                       //sends the request to the server to go to index.html
    response.sendFile(__dirname + "/index.html")              // __dirname is benificial while deploying
    //response.sendFile is for sending files as response
})

app.post("/bmi",function(request,response){
    const w = parseFloat(request.body.weight)                            //fetching the first form value and assigning to a w
    const h = parseFloat(request.body.height)                            //fetching the second form value and assigning to a h

    const bmi = w / ( h * h )                                         //calculating the sum
    response.send("Your BMI is " +bmi)                    //sending the response
})

app.listen(8080, function(){
    console.log("Server Started at 8080") 
})