import GetMessage from '../models/getMessage.js'
import mongoose from 'mongoose'
export const getData =  async (req,res)=>{
    try{
     const getMessage = await GetMessage.find()
     res.status(200).json(getMessage)
    }
    catch(err){
        res.status(404).json({message:error.message})
    }
    }

export const createData = async (req,res)=>{
    
    const Post = req.body
    const newPost = new GetMessage(Post);
        try{
        await newPost.save()
        res.status(201).json(newPost);
        }
        catch(error){
           res.status(409).json({message:error.message})
        }
        }


     export const updateData = async (req, res) => {
            const { id } = req.params;
            const { title, message, creator, selectedFile, tags } = req.body;
            
            if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
        
            const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
        
            await GetMessage.findByIdAndUpdate(id, updatedPost, { new: true });
        
            res.json(updatedPost);
        }

   export const deleteData = async (req,res)=>{
       const { id } = req.params;
       if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

       await GetMessage.findOneAndDelete(id);
   }