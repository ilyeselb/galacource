
module.exports  =  function(req, res, next) {
    console.log("1");
    res.header("Access-Control-Allow-Origin", "*"),
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
    console.log("2");

    next()
  }