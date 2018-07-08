const express=require('express');
const app=express();
const Joi=require('joi');
const genres=[

	{"type":"comedy","rate":1},
	{"type":"romance","rate":2},
	{"type":"thriller","rate":3},
	{"type":"action","rate":4},
	{"type":"cartoon","rate":5}
	];
function validthat(genre){
	const schema={
		type:Joi.string().min(3).required()};
	    return Joi.validate(genre,schema);
}
 app.get('/api/genres',(req,res)=>{
 res.send(genres);
  res.end();
	
 });

 app.get('/api/genres/:type',(req,res)=>{
      
      const result=validthat(req.params.type)
      
      if (result.error) {
      	return res.status(400).send(result.error.details[0].message);
      }

   

	found=genres.find(c =>  c.type===(req.params.type));
 	
 	
    if(!found) 	
    return res.status(404).send("error in finding the type");
 	
 	res.send(found);
 });



app.listen(3000,()=> {console.log("hello");});