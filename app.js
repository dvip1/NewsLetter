const express= require("express");
const bodyParser= require('body-parser');
const  https= require('https');
const app= express();
const port= 3000;
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));	
app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/signUp.html');
})
app.listen(port,()=>{
	console.log('App is running on '+ port);
})
