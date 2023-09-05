console.log("hello demo");

const express = require('express')

const app = express()


app.get('/' , (req , resp)=>{
    return resp.json({
        name:"ahmadd"
    })
})



app.listen(3000 , ()=>{

    console.log("app is running");
})