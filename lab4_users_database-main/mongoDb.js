const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = `mongodb+srv://admin:1234@Users.jbzcutm.mongodb.net/?retryWrites=true&w=majority`;
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to the server
client.connect(function(err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Create a collection named "Users"
  const usersCollection = db.collection('Users');
  
  // Insert a document into the "Users" collection
  usersCollection.insertOne({
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
     "address":{
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo":{
        "lat": "-37.3159",
        "lng": "81.1496"
      }
     },
     "phone": "1-770-736-8031",
    "website": "http://hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets",
    }
    
    
  }, function(err, result) {
    console.log("Inserted document into the Users collection");
  });

  // Close the client
  client.close();
});
