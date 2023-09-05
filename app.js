const express = require('express')


console.log("hello demo");


const app = express()


app.get('/' , (req , resp)=>{
    return resp.json({
        name:"ahmadsasasd"
    })
})



app.listen(3005 , ()=>{

    console.log("app is running");
})