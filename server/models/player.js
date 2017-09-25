var mongoose = require('mongoose');
var PlayerSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    position: {type: String, required: false},
    game1: {type: Boolean, required: false},
    game2: {type: Boolean, required: false},
    game3: {type: Boolean, required: false},
})
var Player = mongoose.model('Player', PlayerSchema);