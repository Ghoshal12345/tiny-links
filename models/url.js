import mongoose from 'mongoose'

const urlSchema= new mongoose.Schema({
    shortId: {
        type: String, 
        required: true,
        unique: true
    },
    redirectUrl:{
        type: String,
        required: true,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    visitHistory:[
        {
            timestamp: {type: Date, default: Date.now}
        },
    ]

}, {timestamps: true})

const url= mongoose.model("url", urlSchema);
export default url;