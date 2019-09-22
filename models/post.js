import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name:String,
    title:String,
    content:String,
    slug: String,

    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
