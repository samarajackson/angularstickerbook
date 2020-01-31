let path = require('path');

module.exports = function(app){
    //catchall to redirect to angular routes
    app.all("*", ( req, res, next ) => {
        res.sendFile(path.join(__dirname, "./../../client/dist/client/index.html"))
      });
}