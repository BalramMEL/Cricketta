import mongoose, { Schema } from "mongoose";


const registrationSchema = new Schema({
    firstName: String,
    lastName: String,
    country: String, 
    position: String,
        
    // teamName: {
    //     type: String,
    //     enum: ['CSK', 'MI', 'RCB', 'RR', 'KKR', 'SRH'],
    // },
    // profileImage: {
    //     data: Buffer,
    //     contentType: String
    // }

})

export const Register = mongoose.model("registration", registrationSchema);



