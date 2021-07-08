function start(app,port) {
    app.listen(port);
    console.log("Sunucu başarı ile kalkışa geçti. Port: " + port);
};

module.exports = start;