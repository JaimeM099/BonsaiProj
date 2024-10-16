const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
require ('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

//connect to mongodb setup
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.error('MongoDB connection error:', err);
});

//define the routes being used
app.get('/', (req, res) => {
    res.send('Backend server is running');
  });
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));