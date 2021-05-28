import mongoose from 'mongoose'
const getSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: String,
        default: 0
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})

const GetMessage = mongoose.model('getMessage', getSchema)
export default GetMessage;