const express = require('express');
const path = require('path');
const users = require('./usersCollection.json');
const teammates = require('./teammatesCollection.json');
const folders = require('./foldersCollection.json');
const projects = require('./projectsCollection.json');

const cors = require('cors')
let app = express();
app.use(cors())
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

function dummyAuthentication(req, res, next) {
    if (!req.header('Authentication'))
        res.status(401).send({error: true, description: 'Auth-Failed'});
    else {
        let user = users.find(user => user.username === req.header('Authentication'));
        if(!!user){
            req.user = user;
            next();
        }
        else
            res.status(401).send({error: true, description: 'Auth-Failed'});
    }
}
// TODO: 400 if no id or casting to number is NaN | or 404 if find fail


app.get('/api/folders/:id', dummyAuthentication, function (req, res) {
    try{
        let folder = folders.find(folder => !!(folder.id === parseInt(req.params.id) && folder.userId === req.user.id));
        if(!folder)
            throw(folder)
        res.status(200).send(projects.filter(project => project.folderId === folder.id));
    }
    catch (e) {
        res.status(404).send({error: true, description: e});
    }
});

app.get('/api/folders', dummyAuthentication, function (req, res) {
    try{
        res.status(200).send(folders.filter(folder => folder.userId === req.user.id));
    }
    catch (e) {
        res.status(404).send({error: true, description: e});
    }
});

app.get('/api/teammates', dummyAuthentication, function (req, res) {

    try{
        res.status(200).send(teammates.filter(teammates => teammates.userId === req.user.id));
    }
    catch (e) {
        res.status(404).send({error: true, description: e});
    }
});

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || '8080';
app.listen(port, () => console.log(`Running on localhost:${port}`));