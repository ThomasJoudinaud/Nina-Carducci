const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decodedToken = jwt.verify(token, "generation_aléatoire_de_token")
        const UserId = decodedToken.UserId
        req.auth = {
            userId: UserId
        }
    } catch(error) {
        res.status(401).json({error})
    }
}