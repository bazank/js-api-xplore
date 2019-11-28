import mongoose from 'mongoose';

export const Schema = mongoose.Schema;

export const ContactSchema = new Schema ({
    firstName:{  
        type: String,
        required: 'Enter First Name'
    },
    lastName:{  
        type: String,
        required: 'Enter Last Name'
    },
    email:{  
        type: String
    },
    phone:{  
        type: Number
    },
    created_data:{
         type: Date,
         default: Date.now
    }
});

