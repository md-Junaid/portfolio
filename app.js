var express = require("express"),
	app		= express();

app.set('port', 3000);

app.use(express.static(__dirname + "/docs"));

app.get("/", function(req, res) {
	res.render("index");
});

var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log("server started at port: " + port);
});