/*
***we will connect models to controller
**fetch all idea from model
*/

const idea=require("../Models/ideas.model");
let i=4;


exports.getallidea=(req,res)=>{
    res.status(200).send(idea);
}
exports.postallidea=(req,res)=>{
   //Read the data
   const idea_object=req.body;
   idea[i]=idea_object; ///idea mei ja raha hai
   idea_object["id"]=i;
   i++;
   res.status(201).send(idea_object);
   
exports.putallidea=(req,res)=>{
    const a=req.params.id;
    const b=req.body;
    if(idea[a]){
    idea[a]=b;
    res.send(b).status(201);
    }
    else{
        req.send("NOT fOUND").status(404);
    }
}
exports.deleteallidea = (req, res) => {
    if (idea[req.params.id]) {
        delete idea[req.params.id];
        res.status(200).send("Deleted");
    } else {
        res.status(404).send("Not Found");
    }
};

}