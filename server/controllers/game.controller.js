const axios = require('axios')

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
        console.log(token)
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
            game.first_release_date = {
                timestamp: game.first_release_date,
                date: date.toLocaleDateString('en-US', options)
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
            let date = new Date(game.data[0].first_release_date * 1000)
            const options = { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'UTC' };
            game.data[0].first_release_date = {
                timestamp: game.data[0].first_release_date,
                date: date.toLocaleDateString('en-US', options)
            }
            let involved_companies = []
            game.data[0].involved_companies.forEach(company => {
                involved_companies.push({
                    "name": company.company.name,
                    "publisher": company.publisher,
                    "developer": company.developer
                })
            })
            return ({
                "id": game.data[0].id,
                "name": game.data[0].name,
                "cover": game.data[0].cover.url,
                "release_date": game.data[0].first_release_date,
                "genres": game.data[0].genres,
                "game_modes": game.data[0].game_modes,
                "platforms": game.data[0].platforms,
                "involved_companies": involved_companies,
                "summary": game.data[0].summary,
                "videos": game.data[0].videos,
                "screenshots": game.data[0].screenshots
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
    const results = await searchGamesIGDB(req.body['query'])
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