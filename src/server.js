const express = require('express'),
    Busboy = require('busboy'),
    path = require('path'),
    fs = require('fs');


const app = express();

app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="imageUpload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
})

app.post('/imageUpload', function (req, res) {

    const busboy = new BusboProfileInfo.jsxy({headers: req.headers});
    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
        const saveTo = path.join(__dirname, 'assets/images/' + filename);
        file.pipe(fs.createWriteStream(saveTo));
    });
    busboy.on('finish', function () {
        console.log("FINISH");
        res.writeHead(200, {'Connection': 'close'});
        res.end("That's all folks!");
    });

    return req.pipe(busboy);
});

app.listen(8070);