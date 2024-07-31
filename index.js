const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const uploadRoutes = require('./routes/uploadRoute'); 

const app = express();

dotEnv.config();

mongoose.connect(process.env.MONGO_URI)
    .then( () => console.log("MongoDB Connected Successfully!"))
    .catch(error => console.log(error));

app.use(bodyParser.json());
app.use('/upload', uploadRoutes);

const PORT = process.env.PORT;

app.listen( PORT, () => {
    console.log(`Server is running at ${PORT}`);
})

app.use("/", (req, res) => {
    res.send("<h1> Welcome to videoPlayer Project");
})
