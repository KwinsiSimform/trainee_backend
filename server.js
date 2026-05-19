const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
const allowedOrigins = [
  "http://localhost:3000",
  "https://thankful-flower-02a09de00.7.azurestaticapps.net"
];

app.use(cors({
  origin: allowedOrigins
}));
// app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running");
});
app.use('/items', require('./routes/items'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));