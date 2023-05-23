//To build an API, a backend API
//API Routes -- recieve and return JSON

// /api/new-meetup
// if a request is sent to this URL, it will trigger this function
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://yiming:yiming@cluster0.27mpt1a.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({ message: "Inserted data successfully!" });
  }
}

export default handler;
