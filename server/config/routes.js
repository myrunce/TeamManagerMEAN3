var players = require('../controllers/players.js');

module.exports = function(app) {
    app.get('/players', players.getAll);
    app.post('/players', players.addPlayer);
    app.put('/players/:id', function(req, res) {
        players.updatePlayer(req, res);
    });
    app.delete('/players/:id', players.delete);
    app.get('/players/:id', players.findOne);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}