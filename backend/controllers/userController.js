import bcrypt from 'bcrypt'
import Joi from 'joi'
import genAuth from '../middleware/auth.js';
import UserModel from '../models/user.js'


export const registerUser = async (req,res) => {
    const schema = Joi.object({
        name:Joi.string().min(3).max(30).required(),
        email:Joi.string().min(3).max(200).required().email(),
        password:Joi.string().min(6).max(200).required(),
    });

    const {error} = schema.validate(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    let user = await UserModel.findOne({email:req.body.email});

    if(user) return res.status(400).send("User already exist..")


    user = new UserModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    });

    // hash password before saving to to database 
    let salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt)
    user = await user.save();

    let token = genAuth(user);

    res.send(token);

}


// login 


export const loginUser = async (req,res) => {
    const schema = Joi.object({
        
        email:Joi.string().min(3).max(200).required().email(),
        password:Joi.string().min(6).max(200).required(),
    });

    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await UserModel.findOne({email:req.body.email});


    if(!user) return res.status(400).send("Invalid email or password..")

    const isValid = await bcrypt.compare(req.body.password,user.password);

    if(!isValid)  return res.status(400).send("Invalid email or password..")


    const token = genAuth(user);

    res.send(token)



}