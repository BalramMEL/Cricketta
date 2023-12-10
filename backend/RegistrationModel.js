import mongoose, { Schema } from "mongoose";


const registrationSchema = new Schema({
    firstName: String,
    lastName: String,
    country: String, 
    position: String,       
    image: String
})

export const Register = mongoose.model("registration", registrationSchema);


const teamCardSchema = new Schema({
    teamName: String,
    image: String
})
export const TeamCard = mongoose.model("teams", teamCardSchema);
