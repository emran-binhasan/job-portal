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

    app.get('/jobs', async (req, res) => {
      const query = req.query.email ? { hr_email: req.query.email } : {};
      const result = await jobCollection.find(query).toArray();
      res.send(result);
    });





    app.get('/job/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id:new ObjectId(id)}
      const result = await jobCollection.findOne(query);
      res.send(result)
    })

    app.get('/applications', async(req , res)=> {

      if(req.query.email){
        query ={applicant_email:req.query.email} 
      }else{
        query ={jobId:req.query.jobId}
      }
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
          each.jobType = job.jobType
        }
      }
      res.send(result);
    })

 
    app.post('/applicaions', async(req , res)=> {
      const application = req.body;
      const result = await jobApplicationCollection.insertOne(application);
      const id = application.jobId;
      const query = {_id : new ObjectId(id)}
      const job = await jobCollection.findOne(query)
      let newCount = 0;
      if(job.applicationCount){
        newCount = job.applicationCount+1;
      }
      else{
        newCount = 1;
      }
      const filter = {_id : new ObjectId(id)}
      const updateData = {
        $set:{
          applicationCount: newCount
        }
      }
      const updateResult = await jobCollection.updateOne(filter,updateData)
      res.send(result);
    })


    app.post('/jobs', async(req, res)=> {
      const job = req.body;
      const cursor = jobCollection.insertOne(job)
      const result = await cursor;
      res.send(result)
    })

    app.patch('/applications/:id', async(req, res) => {
      const id = req.params.id;
      const data = req.body;
      const filter = {_id : new ObjectId(id)};
      const updatedDoc = {
        $set:{
          status:data.status
        }
      }
      const x = await jobApplicationCollection.findOne(filter)
      const result =await jobApplicationCollection.updateOne(filter,updatedDoc)
      res.send(result);
    })



  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port);
