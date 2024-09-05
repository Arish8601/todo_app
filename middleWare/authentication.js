const jwt = require('jsonwebtoken');
const secret = "mysecret";

// Middleware function
const auth = (req, res, next) => {
    try {
        const token = req.headers.token;

        if (!token) {
            return res.json({
                msg: "Missing token",
                status: false
            });
        }
        const verify = jwt.verify(token, secret);
        if(!verify) {
            return res.json({
                msg: "Token is invalid",
                status: false
            })
        }
        req.user = verify;
        next();
        
    } catch (err) {
        console.log(err)
        return res.json({
            msg: err.message,
            status: false
        });
    }
};

module.exports = auth;



