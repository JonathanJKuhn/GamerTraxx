const GameController = require('../controllers/game.controller')
module.exports = (app) => {
    app.get("/api/v1", GameController.index)
    // Routes to IGDB data
    app.get("/api/v1/search-igdb/:query", GameController.searchIGDB)
    app.get("/api/v1/details-igdb/:id", GameController.detailsIGDB)
    // Routes to app's db data
    app.post("/api/v1/my-games", GameController.createCollectionGame)
    app.get("/api/v1/my-games", GameController.getCollectionGames)
    app.get("/api/v1/my-games/:id", GameController.getCollectionGame)
    app.patch("/api/v1/my-games/:id", GameController.updateCollectionGame)
    app.delete("/api/v1/my-games/:id", GameController.deleteCollectionGame)
}