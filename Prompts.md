# AI Prompt Log — Data Hub

This document records the use of AI assistance during the development of the Data Hub REST API project.

AI assistance was used primarily for **concept explanation, debugging, code-structure guidance, and troubleshooting**. The project was implemented, tested, and verified locally using Node.js, Express.js, and Thunder Client.

## Prompt 1 — Express Server Setup

**Purpose:** Understand how to initialize an Express server and configure a port.

**Prompt:**

> Explain how to create a basic Node.js Express server that listens on port 5000 and returns a JSON response from a root route.

**Use:** Understanding Express application initialization and port configuration.

---

## Prompt 2 — REST Route Structure

**Purpose:** Understand REST endpoint organization.

**Prompt:**

> Explain how to structure GET, POST, PUT, and DELETE routes for a blog resource using Express Router.

**Use:** Understanding REST architecture and route separation.

---

## Prompt 3 — In-Memory CRUD

**Purpose:** Understand how to implement CRUD operations using a JavaScript array.

**Prompt:**

> Explain how an Express API can use an in-memory array as a temporary database and perform create, read, update, and delete operations using route parameters.

**Use:** Understanding CRUD logic and request parameters.

---

## Prompt 4 — PUT Route Debugging

**Purpose:** Debug a PUT endpoint returning `Cannot PUT /posts/1`.

**Prompt:**

> My Express server returns `Cannot PUT /posts/1`. Explain what this error means and how to check whether the route is registered correctly.

**Use:** Debugging route registration and Express Router configuration.

---

## Prompt 5 — Request Body Parsing

**Purpose:** Understand `req.body`.

**Prompt:**

> Explain how express.json() works and how req.body can be used to read JSON data sent in a POST or PUT request.

**Use:** Understanding JSON request handling.

---

## Prompt 6 — Custom Middleware

**Purpose:** Understand Express middleware.

**Prompt:**

> Explain how to create custom Express middleware that logs the HTTP method, URL, and timestamp for every incoming request.

**Use:** Implementing the sprint's custom logging middleware.

---

## Prompt 7 — Mock Authentication

**Purpose:** Understand authentication scaffolding.

**Prompt:**

> Explain how to create a simple POST /login Express endpoint that validates username and password fields and returns a mock JWT-style token for demonstration purposes.

**Use:** Implementing the sprint's authentication scaffolding.

---

## Prompt 8 — Render Deployment

**Purpose:** Understand deployment requirements for an Express server.

**Prompt:**

> Explain how to prepare an Express Node.js server for deployment on Render, including the use of process.env.PORT and the server start command.

**Use:** Deployment preparation and troubleshooting.

---

## Prompt 9 — API Testing

**Purpose:** Understand how to verify REST API endpoints.

**Prompt:**

> Explain how to test GET, POST, PUT, DELETE, and login endpoints using Thunder Client and what responses should be expected.

**Use:** API quality assurance and endpoint verification.

---

## Development Notes

AI assistance was used as a development support tool. The project was independently run and tested in the local development environment.

Testing included:

* GET `/posts`
* GET `/posts/:id`
* POST `/posts`
* PUT `/posts/:id`
* DELETE `/posts/:id`
* POST `/login`
* Invalid request scenarios
* Custom middleware logging

The API was verified using Thunder Client before deployment preparation.
