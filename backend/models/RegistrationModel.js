import mongoose, { Schema } from "mongoose";


const registrationSchema = new Schema({
    firstName: String,
    lastName: String,
    country: String, 
    position: String   
    
})

export const Register = mongoose.model("registration", registrationSchema);



