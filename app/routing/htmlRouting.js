app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/index.html"))
});

app.get('/reservations', function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/reservations.html"))
});

app.get('/reservationsView', function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/reservationView.html"))
});