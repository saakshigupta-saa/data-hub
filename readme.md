# Data Hub — RESTful API Server

A backend REST API built with **Node.js and Express.js** as part of the Fullstack Developer sprint.

The Data Hub demonstrates how a backend server receives HTTP requests, processes data, performs CRUD operations, and returns JSON responses.

## 🚀 Features

* Express.js REST API
* CRUD operations for blog posts
* In-memory data storage
* Custom request logging middleware
* Mock authentication endpoint
* Mock JWT token generation
* JSON request-body parsing
* Proper HTTP status codes
* Tested using Thunder Client

## 🛠️ Tech Stack

* Node.js
* Express.js
* JavaScript
* REST API
* Thunder Client
* Git & GitHub

## 📁 Project Structure

```text
data-hub/
│
├── data/
│   └── posts.js
│
├── middleware/
│   └── logger.js
│
├── routes/
│   ├── postRoutes.js
│   └── authRoutes.js
│
├── .gitignore
├── Prompts.md
├── README.md
├── package.json
├── package-lock.json
└── server.js
```

## ⚙️ Installation

Clone the repository and open the project directory:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd data-hub
```

Install dependencies:

```bash
npm install
```

## ▶️ Running the Server

Start the server with:

```bash
node server.js
```

The API runs locally on:

```text
http://localhost:5000
```

You should see:

```text
Server running on port 5000
```

## 🔗 API Endpoints

### Posts

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/posts`     | Get all posts     |
| GET    | `/posts/:id` | Get a post by ID  |
| POST   | `/posts`     | Create a new post |
| PUT    | `/posts/:id` | Update a post     |
| DELETE | `/posts/:id` | Delete a post     |

### Authentication

| Method | Endpoint | Description                     |
| ------ | -------- | ------------------------------- |
| POST   | `/login` | Mock login and token generation |

## 📝 Example POST Request

**POST**

```text
http://localhost:5000/posts
```

Request body:

```json
{
  "title": "My First Post",
  "content": "Learning REST APIs with Express.",
  "author": "Sakshi"
}
```

Example response:

```json
{
  "message": "Post created successfully",
  "post": {
    "id": 1,
    "title": "My First Post",
    "content": "Learning REST APIs with Express.",
    "author": "Sakshi"
  }
}
```

## 🔐 Login Endpoint

**POST**

```text
http://localhost:5000/login
```

Request body:

```json
{
  "username": "sakshi",
  "password": "123456"
}
```

The endpoint returns a mock JWT-style token for demonstration purposes.

> Note: This is authentication scaffolding for the sprint and is not a production authentication system.

## 📋 Middleware

The project includes custom request logging middleware.

Example:

```text
[GET] /posts - 06:45 PM
[POST] /posts - 06:46 PM
[PUT] /posts/1 - 06:47 PM
[DELETE] /posts/1 - 06:48 PM
```

The middleware logs:

* HTTP method
* Requested URL
* Request timestamp

## 🧪 API Testing

The API was tested using **Thunder Client**.

CRUD operations tested:

* Create a post
* Retrieve all posts
* Retrieve a post by ID
* Update a post
* Delete a post
* Test missing post IDs
* Test login
* Test invalid login payloads

## 💾 Data Storage

The project currently uses an **in-memory JavaScript array** as required by the sprint.

```js
let blogPosts = [];
```

Because the data is stored in memory, all posts are cleared whenever the server restarts.



The application uses:

```js
process.env.PORT || 5000
```

so the deployment platform can provide its own port.

## 🎯 Sprint Requirements Completed

### Phase 1 — Server Initialization & Route Scaffolding

* Node.js environment
* Express installation
* Port configuration
* REST endpoint scaffolding

### Phase 2 — In-Memory CRUD

* In-memory blog post storage
* POST implementation
* GET implementation
* PUT implementation
* DELETE implementation
* API testing

### Phase 3 — Middleware & Authentication

* Custom request logger
* HTTP method logging
* URL logging
* Timestamp logging
* `/login` endpoint
* Mock JWT token

## 👩‍💻 Author

**Sakshi Gupta**

---

## 📄 License

This project was created for educational and sprint-development purposes.
