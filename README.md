# CRUD App - Backend

This is the backend API for a simple CRUD application built using Node.js, Express, and MongoDB (Mongoose). It provides endpoints to create, read, and update items.

---

## 🚀 Features

* Get all items (GET)
* Create a new item (POST)
* Update an item (PUT)
* MongoDB connection using Mongoose
* Environment variable configuration with dotenv

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* CORS

---

## 📂 Project Structure

```id="8c1s9l"
backend/
│-- config/
│   └── db.js          # MongoDB connection
│-- models/
│   └── Item.js        # Item schema
│-- routes/
│   └── items.js       # API routes
│-- .env               # Environment variables
│-- server.js          # Entry point
│-- package.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```id="g6wqpb"
git clone https://github.com/your-username/backend-repo.git
```

2. Navigate into the project:

```id="s9bn4q"
cd backend-repo
```

3. Install dependencies:

```id="d8b3zz"
npm install
```

4. Create a `.env` file:

```id="m1y1cb"
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

5. Start the server:

```id="3cl8h2"
npm start
```

Server will run on:

```id="6eqf3y"
http://localhost:5000
```

---

## 🔌 MongoDB Connection (config/db.js)

Handles database connection using Mongoose.

```id="0qj0tz"
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

---

## 📦 Item Model (models/Item.js)

```id="c1c0l2"
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Item', ItemSchema);
```

---

## 📡 API Endpoints

### 🔹 Get All Items

**GET** `/items`

---

### 🔹 Create Item

**POST** `/items`

Request Body:

```id="2b5r7m"
{
  "name": "Item Name",
  "description": "Item Description"
}
```

* Returns `400` if fields are missing

---

### 🔹 Update Item

**PUT** `/items/:id`

Request Body:

```id="1ch5xw"
{
  "name": "Updated Name",
  "description": "Updated Description"
}
```

* Returns `404` if item not found

---

## 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client
* Curl

---

## ❗ Error Handling

* `500` – Server error
* `400` – Missing required fields
* `404` – Item not found

---

## 🧠 Future Improvements

* Add DELETE endpoint
* Add validation library (Joi / express-validator)
* Add authentication (JWT)
* Pagination & filtering

---

## 👨‍💻 Author

Your Name

---

## 📄 License

MIT License
