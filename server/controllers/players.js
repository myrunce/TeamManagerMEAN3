var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {
    getAll: function(req, res){
        Player.find({}).sort('name').exec(function(err, players) {
            return res.json(players);
        })
    },
    addPlayer: function(req, res){
        var player = new Player({
            name: req.body.name,
            position: req.body.position,
            game1: null,
            game2: null,
            game3: null
        })
        player.save(function(err) {
            if (err){
                console.log(err);
            }
            else {
                return res.json(player)
            }
        })
    },
    updatePlayer: (function(req, res) {
        Player.update({_id: req.params.id}, req.body, function(err, values) {
            if (!err) {
                Player.find({}).sort('name').exec(function(err, players) {
                    return res.json(players);
                })
            } else {
                console.log("fail");
            }
        });
    }),
    delete: function(req, res){
        Player.remove({_id: req.params.id}, function(err) {
            if (err) {
                console.log(err);
            }
            else {
                Player.find({}).sort('name').exec(function(err, players) {
                    return res.json(players);
                })
            }
        })
    },
    findOne: function(req,res){
        Player.findOne({_id: req.params.id}, function(err, player) {
            if (err) {
                console.log(err);
            }
            else {
                return res.json(player)
            }
        })
    }
}