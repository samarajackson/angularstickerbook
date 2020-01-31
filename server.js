let express = require('express'),
path = require('path');

// create an instance of express 
const app = express();

app.use(express.static(path.join(__dirname, './client/dist/client')));

// connect to routes and the paths to them
require('./config/routes')(app);

//catchall
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/client/index.html"))
  });

// running the server on a loop
app.listen(8010, ()=>{
    console.log("running on 8010");
});