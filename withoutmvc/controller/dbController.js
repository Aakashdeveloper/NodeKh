const {MongoClient} = require('mongodb');
const mongoUrl = process.env.mongoUrl;
const mclient = new MongoClient(mongoUrl);

async function dbConnect(){
    await mclient.connect()
};

let client = mclient.db('nodeKh');

async function getData(colName,query){
    let collection = client.collection(colName);
    let output = []
    const cursor = collection.find(query);
    for await(const data of cursor){
        output.push(data)
    }
    cursor.closed;
    return output;
}

module.exports = {
    dbConnect,
    getData
}