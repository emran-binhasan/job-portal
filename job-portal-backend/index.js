const { configDotenv } = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
configDotenv();

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");


const uri = process.env.CONNECTION_STRING;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    const database = client.db("job-portal-db");
    const userCollection = database.collection("userlist");
    const jobCollection = database.collection("jobs");
    const jobApplicationCollection = database.collection("applications")

    app.get("/", async (req, res) => {
      res.send("Server is active");
    });

    app.get('/jobs', async (req,res)=> {
      const cursor = jobCollection.find()
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/job/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id:new ObjectId(id)}
      const result = await jobCollection.findOne(query);
      res.send(result)
    })
    app.get('/application', async(req , res)=> {
      const email = req.query.email;
      const query = {applicant_email:email};
      const result = await jobApplicationCollection.find(query).toArray();
      for (const each of result){
        const newQuery = {_id : new ObjectId(each.jobId)}
        const job = await jobCollection.findOne(newQuery);
        if(job){
          each.title = job.title;
          each.company_logo = job.company_logo;
          each.company = job.company;
          each.category = job.category;
          each.location = job.location;
        }
      }


      res.send(result);
    })




    app.post('/applicaions', async(req , res)=> {
      const application = req.body;
      const cursor = jobApplicationCollection.insertOne(application);
      const result = await cursor;
      res.send(result);
    })






  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port);
