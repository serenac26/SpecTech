const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')

const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://user:password1@ds237735.mlab.com:37735/replies';

app.use(bodyParser())

app.get('/', (req, res) => {
    res.send("Hello!")
    MongoClient.connect(MONGO_URL, (err, client) => {  
        if (err) {
          return console.log(err);
        }

        var db = client.db('replies')

        //get record
        var senders = [] 
        var texts = []
        var cursor = db.collection('data').find().forEach((doc) => {
            senders.push(doc.sender)
            texts.push(doc.text)
        })
        res.send(senders[0] + " says " + texts[0])
        client.close()
    })
})

app.post('/', (req, res) => {
    var msgSender = req.body.message.sender
    var msgText = req.body.message.text
    res.send(msgSender + " says '" + msgText + "'")
    MongoClient.connect(MONGO_URL, (err, client) => {  
        if (err) {
          return console.log(err);
        }

        var db = client.db('replies')
        
        db.collection('data').insertOne(
            {
                sender: msgSender,
                text: msgText
            },
            function (err, res) {
                if (err) {
                    client.close();
                    return console.log(err);
                }
                // Success
                client.close();
            }
        )  
    })
    
})

app.listen(port, () => console.log('App listening on port ' + port))