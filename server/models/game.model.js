const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
    id: {
        type: Number,
        index: true,
        required: true,
    },
    name: {
        type: String,
    },
    cover: {
        type: String,
    },
    first_release_date: {
        type: Object,
    },
    genres: [],
    platforms: [],
    involved_companies: [],
    summary: {
        type: String,
    },
    videos: [],
    screenshots: [],
    like: {
        type: Boolean,
        default: true,
    },
    play_status: {
        type: Number,
    },
},
{ timestamps: true }
);

module.exports = mongoose.model('Game', GameSchema);