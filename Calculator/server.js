const express = require("express")                               //import express module
const bodyParser = require('body-parser')                       // import bodyParser module (helps accesssing the form data)
 
const app = express()
app.use(bodyParser.urlencoded({extended: true}))               // lets access the form data using "request.body"

app.get("/", function(request,response){                       //sends the request to the server to go to index.html
    response.sendFile(__dirname + "/index.html")              // __dirname is benificial while deploying
    //response.sendFile is for sending files as response
})

app.post("/",function(request,response){
    const x = Number(request.body.n1)                            //fetching the first form value and assigning to a x
    const y = Number(request.body.n2)                            //fetching the second form value and assigning to a y

    const ans = x+y                                              //calculating the sum

    response.send("The Calulated Value is "+ans)                    //sending the response
})

app.listen(8080, function(){
    console.log("Server Started at 8080") 
})

s