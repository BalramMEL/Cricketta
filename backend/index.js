// import express, {response} from 'express';
// import mongoose from 'mongoose';
// import { StatusCodes } from 'http-status-codes';
// import { DELETE_SUCCESS, ERROR_MESSAGE, INSERT_SUCCESS, STUDENT_NOT_FOUND, UPDATE_SUCCESS } from './constants.js';
// import { Register } from './RegistrationModel.js';
import cors from 'cors';

// const app = express(); 
//  app.use(express.json);
// // app.use(cors());

// const connectDB = async () => {
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/cricket');
//         console.log("Database connected");
//     } catch (error) {
//         console.log(error);
//     }
// }

// app.listen(4005, () => {
//     console.log('Server is running on port: ', 4005);
//     connectDB();
// })

// app.post("/registration", async (request, response) => {
//     try {       
//         const reqData = request.body;
       
//         const register = new Register(reqData);
//         await register.save();
//         return response.status(200).send({message:INSERT_SUCCESS});
//     } catch (error) {
//         response.status(400).send({message:ERROR_MESSAGE})
//     }
// })

// app.get("/registration", async (req, res) => {
//     try {
//         const registers = await Register.find();
//         res.send({registers:registers})
//     } catch (error) {
//         response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE}); 
//     }
// })


import express, { response } from 'express';
import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import { DELETE_SUCCESS, ERROR_MESSAGE, INSERT_SUCCESS, STUDENT_NOT_FOUND, UPDATE_SUCCESS } from './constants.js';
import { Register } from './RegistrationModel.js';

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