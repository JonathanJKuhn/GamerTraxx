const GameController = require('../controllers/game.controller')
module.exports = (app) => {
    app.get("/api/v1", GameController.index)
    app.get("/api/v1/search-igdb/:query", GameController.searchIGDB)
    app.get("/api/v1/details-igdb/:id", GameController.detailsIGDB)
}