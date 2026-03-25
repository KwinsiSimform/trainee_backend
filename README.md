# CRUD App - Backend

This is the backend API for a CRUD application built using Node.js, Express, and MongoDB. It handles all data operations and serves RESTful endpoints.

## 🚀 Features

* Create item (POST)
* Read items (GET)
* Update item (PUT)
* REST API structure
* MongoDB integration

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* CORS
* dotenv

## 📂 Project Structure

```
backend/
│-- models/
│-- routes/
│-- controllers/
│-- server.js
│-- package.json
```

## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone https://github.com/your-username/backend-repo.git
```

2. Navigate to the project:

```
cd backend-repo
```

3. Install dependencies:

```
npm install
```

4. Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

5. Start the server:

```
npm start
```

## 📡 API Endpoints

### Get all items

```
GET /api/items
```

### Create item

```
POST /api/items
Body:
{
  "name": "Item Name",
  "description": "Item Description"
}
```

### Update item

```
PUT /api/items/:id
Body:
{
  "name": "Updated Name",
  "description": "Updated Description"
}
```

## 🧪 Testing API

You can use:

* Postman
* Thunder Client
* Curl

## 🧠 Future Improvements

* Add DELETE endpoint
* Input validation
* Authentication (JWT)
* Error handling middleware

## 👨‍💻 Author

Your Name

## 📄 License

This project is licensed under the MIT License.
