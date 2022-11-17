const express = require("express")                            //import express 
app = express()                                               //assign app to express

app.listen(3000, function(){                                   // listens to a specific port
    console.log("server is running on port 3000")
})


app.get("/",function(request,response){                          // works as GET request
    response.send("<h1>server is running on port 3000</h1>")          
})

app.get("/about",function(request,response){                       // different routes for request          
    response.send("<h1>This is about page</h1>")           
})

app.get("/contact",function(request,response){                         // different routes for request 
    response.send("<h1>This is contact page</h1>")          
})