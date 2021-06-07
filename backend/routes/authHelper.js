let isAuthenticated = function(req, res, next){
    // console.log(req.session);
    // if (!req.session.email) {
    //     return res.status(401).end("access denied");
    // }
    next();
};

module.exports = isAuthenticated