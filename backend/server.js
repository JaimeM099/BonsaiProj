const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();

//updated cors configuration
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL (will change this for production)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  credentials: true, // Allow credentials if needed
}));

app.use(express.json());

//connect to mongodb setup
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

//using user routes
app.use('/api/auth', userRoutes);
  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//define the routes being used
// app.get('/', (req, res) => {
//     res.send('Backend server is running');
//   });