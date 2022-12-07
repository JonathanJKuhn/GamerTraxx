const axios = require('axios')
const apicalypse = require('apicalypse')

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

module.exports.index = async (req, res) => {
    if(checkTokenValidity(token) === false) {
        getToken()
    }
    res.json({
        message: "API Index",
    })
}