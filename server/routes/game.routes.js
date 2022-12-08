const GameController = require('../controllers/game.controller')
module.exports = (app) => {
    app.get("/api/v1", GameController.index)
    app.get("/api/v1/search-igdb", GameController.searchIGDB)
}