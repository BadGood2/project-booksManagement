const {decodeToken} = require('../controller/loginController')

const userAuthorization = async (req,res,next) => {
    try{
        let token = req.headers['user-auth-key']
        let verifyToken = decodeToken(token)
        if(!verifyToken)
            return res.status(401).send({
                status: false,
                message: "Token is either Invalid or Expired."
            })
        req.headers['valid-auth-user_id'] = verifyToken.userId
        next()
    }catch(err){
        console.log(err.message)
        res.status(500).sens({
            status: false,
            message: err.message
        })
    }
}

module.exports = userAuthorization