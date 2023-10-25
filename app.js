let express = require('express');

let app = express();

app.use(express.static('public')); //middleware
app.use(express.urlencoded({ extended: false })); //POST parametroa jasotzeko gaitasuna

app.listen( 3000, function() {
    console.log("Zerbitzaria 3000 portuan entzuten");
})

app.get("/", function(req, res) { //Cuando pongas "/"(o nada) en el url te tiene que salir "Kaixo mundua!"
    res.send("Hello world!");
});

app.post("/bezeroa", function(req, res) {
    res.send(`Kaixo ${req.body.izena} , eskaera jaso dut`);
});

app.get('/bezeroa/', function(req, res) {
    res.send(`Bezeroaren izena: ${req.query.izena} ${req.query.abizena}`);
});

app.get('/ariketa', function(req, res) {
    res.send(`Bezeroaren izena: ${req.query.izena} ${req.query.abizena}`);
});