
function log(re, res, next){
    console.log('Logging ....');
    next();
}

// function log(req, res, next){
//     console.log('Authenticating ....');
//     next();
// }

module.exports = log;