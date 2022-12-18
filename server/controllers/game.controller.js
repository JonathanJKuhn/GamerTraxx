const axios = require('axios')
const { request } = require('express')
const Game = require('../models/game.model')

//include access_token, token_type, and expiration_time?
let token = {
    "access_token": process.env.ACCESS_TOKEN,
    "expires_at": process.env.EXPIRES_AT,
    "token_type": process.env.TOKEN_TYPE
}


const getToken = (id=process.env.CLIENT_ID,secret=process.env.CLIENT_SECRET) =>{
    axios.post(`https://id.twitch.tv/oauth2/token?client_id=${id}&client_secret=${secret}&grant_type=client_credentials`)
    .then((res) => {
        let expiration = Date.now() + (res.data['expires_in'] * 1000)
        token = {
            "access_token": res.data['access_token'],
            "expires_at": expiration,
            "token_type": res.data['token_type']
        }
        process.env.ACCESS_TOKEN = res.data['access_token']
        process.env.EXPIRES_AT = expiration
        process.env.TOKEN_TYPE = res.data['token_type']
    })
    .then(() => checkTokenValidity(token))
    .catch((err) => console.log(err))
}

const checkTokenValidity = (token=token) => {
    isValid = true
    Object.keys(token).length === 0 && (isValid = false)
    token.expires_at <= Date.now() && (isValid = false)
    return(isValid)
}

const searchGamesIGDB = async (query) => {
  try {
    const games = await axios({
        url: 'https://api.igdb.com/v4/games',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': process.env.CLIENT_ID,
            'Authorization': `${token.token_type} ${token.access_token}`,
            'Accept-Encoding': 'gzip,deflate,compress'
    },
        data: `search "${query}"; fields name, cover.url, first_release_date; limit 50;`
    });

    if(games.data){
        games.data.forEach(game => {
            let date = new Date(game.first_release_date * 1000)
            const options = { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'UTC' };
            if(game.hasOwnProperty('first_release_date')) {
                game.first_release_date = {
                    "timestamp": game.first_release_date,
                    "date": date.toLocaleDateString('en-US', options)
                }
            } else {
                game.first_release_date = {
                    "timestamp": null,
                    "date": null
                }
            }
            if(game.hasOwnProperty('cover')){
                game.cover.url = `https:${game.cover.url}`
            } else {
                game.cover = {
                    "url": 'https://via.placeholder.com/90?text=No+Cover+Found'
                }
            }
        })

        return games.data
    }

  } catch (err) {
    console.log(err);
  }
}

const getDetailsIGDB = async (id) => {
    try {
        const game = await axios({
            url: 'https://api.igdb.com/v4/games',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': process.env.CLIENT_ID,
                'Authorization': `${token.token_type} ${token.access_token}`,
                'Accept-Encoding': 'gzip,deflate,compress'
            },
            data: `fields name, cover.url, first_release_date, genres.name, game_modes.name, platforms.name, involved_companies.company.name,involved_companies.publisher, involved_companies.developer, summary, videos.video_id, screenshots.url; where id = ${id};`
        });
        if(game.data){
            let gameResult = game.data[0]
            let date = new Date(gameResult.first_release_date * 1000)
            const options = { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'UTC' };
            if(gameResult.hasOwnProperty('first_release_date')) {
                gameResult.first_release_date = {
                    "timestamp": gameResult.first_release_date,
                    "date": date.toLocaleDateString('en-US', options)
                }
            } else {
                gameResult.first_release_date = {
                    "timestamp": null,
                    "date": null
                }
            }
            if(gameResult.hasOwnProperty('cover')){
                gameResult.cover.url = `https:${gameResult.cover.url}`
            } else {
                gameResult.cover = {
                    "url": 'https://via.placeholder.com/90?text=No+Cover+Avaliable'
                }
            }

            if (gameResult.hasOwnProperty('screenshots')) {
                gameResult.screenshots.forEach(screenshot => {
                    let urlArray = screenshot.url.split('/')
                    urlArray[6] = 't_original'
                    screenshot.url = urlArray.join('/')
                    screenshot.url = `https:${screenshot.url}`
                })
            } else {
                gameResult.screenshots = null
            }

            let involved_companies = []
            if(gameResult.hasOwnProperty('involved_companies')){
                gameResult.involved_companies.forEach(company => {
                    involved_companies.push({
                        "name": company.company.name,
                        "publisher": company.publisher,
                        "developer": company.developer
                    })
                })
            } else {
                involved_companies = null
            }
            
            let platforms = []
            if(gameResult.hasOwnProperty('platforms')){
                gameResult.platforms.forEach(platform => {
                    platforms.push(platform.name)
                })
            } else {
                platforms = null
            }

            return ({
                "id": gameResult.id,
                "name": gameResult.name,
                "cover": {"url": gameResult.cover.url},
                "first_release_date": gameResult.first_release_date,
                "genres": gameResult.genres,
                "game_modes": gameResult.game_modes,
                "platforms": platforms,
                "involved_companies": involved_companies,
                "summary": gameResult.summary,
                "videos": gameResult.videos,
                "screenshots": gameResult.screenshots
            })
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports.index = (req, res) => {
    res.json({
        message: "API Index",
    })
}

module.exports.searchIGDB = async (req, res) => {
    if(checkTokenValidity(token) === false) {
        getToken()
    }
    const results = await searchGamesIGDB(req.params.query)
    if(!results) {
        res.status(400).json({
            message: "No games found",
        })
    }
    res.json(results)

}

module.exports.detailsIGDB = async (req, res) => {
    if(checkTokenValidity(token) === false) {
        getToken()
    }
    const results = await getDetailsIGDB(req.params.id)
    if(!results) {
        res.status(400).json({
            message: "No games found",
        })
    }
    res.json(results)
}

module.exports.createCollectionGame = (req, res) => {
    Game.init()
        .then(async () => {
            const game = new Game(req.body)
            await game.save()
            res.status(201).json(game)
        })
        .catch((err) => res.status(400).json(err))
}

module.exports.getCollectionGames = (req, res) => {
    Game.find()
        .then((games) => res.json(games))
        .catch((err) => res.status(400).json(err))
}

module.exports.getCollectionGame = (req, res) => {
    Game.findOne({id: req.params.id})
        .then((game) => res.json(game))
        .catch((err) => res.status(400).json(err))
}

module.exports.updateCollectionGame = (req, res) => {
    Game.findOneAndUpdate({id: req.params.id}, req.body, { new: true, runValidators: true, context: 'query' })
        .then((updatedGame) => res.json(updatedGame))
        .catch((err) => res.status(400).json(err))
}

module.exports.deleteCollectionGame = (req, res) => {
    Game.deleteOne({id: req.params.id })
        .then((result) => res.json(result))
        .catch((err) => res.status(400).json(err))
}