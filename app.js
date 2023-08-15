const express=require('express');
const https=require('https');
const app = express()

const PORT=8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.sendFile('/VRapp1.html',{root:__dirname})
})

app.listen(PORT,()=>console.log(`Server Running at port ${PORT}`));