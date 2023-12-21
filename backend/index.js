
import express from 'express';
import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import { DELETE_SUCCESS, ERROR_MESSAGE, INSERT_SUCCESS, STUDENT_NOT_FOUND, UPDATE_SUCCESS } from './constants.js';
import { Register } from './models/RegistrationModel.js';
import cors from 'cors';
;

const app = express(); 
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/cricket');
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}

app.listen(4005, () => {
    console.log('Server is running on port: ', 4005);
    connectDB();
})

// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "images/")
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() 
//     cb(null, uniqueSuffix + file.originalname);
//   }
// })

// const upload = multer({ storage: storage })

app.post("/player", async (request, response) => {
    try {                
        const reqData = request.body;        

        const register = new Register(reqData);
        const savedData = await register.save();

        return response.status(StatusCodes.CREATED).send(savedData);
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

app.get("/player", async (request, response) => {
    try {
        const registers = await Register.find();
        response.send({registers:registers})
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE}); 
    }
})


app.delete("/player/:_id", async (request, response) => {
    try {
        await Register.deleteOne({ _id: request.params._id });
        response.send({message:DELETE_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
})

app.put("/player/:_id", async (request, response) => {
    try {
        await Register.updateOne({_id: request.params._id},request.body);
        response.send({message:UPDATE_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
})

app.get("/player/:_id",async(request,response)=>{
    try {
       const player=await Register.findOne({Id:request.params._id});
       if (player==null) {
        response.status(StatusCodes.NOT_FOUND).send({message:STUDENT_NOT_FOUND});
       }
       else{
         response.send({player:player});
       }
       
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});







// app.post("/teams", async (request, response) => {
//     try {
//         const reqData = request.body;
//         const team = new TeamCard(reqData);
//         const saveData = await team.save();
//         return response.status(StatusCodes.CREATED).send(saveData);
//     } catch (error) {
//         response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});        
//     }
// })

// app.get("/teams", async (request, response) => {
//     try {
//         const teams = await TeamCard.find();
//         response.send({teams: teams})
//     } catch (error) {
//         response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});         
//     }
// })















   // position: {
    //     type: String,
    //     enum: ['Batsman', 'Wk-batsman', 'All-Rounder', 'Bowler']
    // },
    // teamName: {
    //     type: String,
    //     enum: ['CSK', 'MI', 'RCB', 'RR', 'KKR', 'SRH'],
    // },
    // profileImage: {
    //     data: Buffer,
    //     contentType: String
    // }