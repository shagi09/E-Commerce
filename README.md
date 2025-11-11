# E-Commerce REST API

A modular and scalable **E-Commerce REST API** built with **NestJS**, **MongoDB**, and **JWT authentication**.  
This backend service powers user registration, login, product management, and order workflows with complete API documentation via Swagger.

---

## Overview

This project provides a production-ready backend for an online store.  
It includes:

- User registration and login with JWT authentication
- Role-based access control (user / admin)
- Product management (CRUD) — Admin-only endpoints
- product list and details
- Order placement with stock validation and transactions
- Order management
- MongoDB integration
- Auto-generated API documentation (Swagger)
- Centralized configuration and modular architecture

---

### Tech Stack

| Technology | Purpose |
|-------------|----------|
| **NestJS** | Framework providing structure, modularity, and dependency injection |
| **MongoDB + Mongoose** | NoSQL database for users, products, and orders |
| **JWT** | Authentication and authorization |
| **Bcrypt** | Password hashing and security |
| **Swagger** | Interactive API documentation |
| **Dotenv** | Environment variable management |
| **Class-Validator & Class-Transformer** | Input validation and data transformation |

---



#### Project setup

- git clone https://github.com/shagi09/E-Commerce.git
- cd E-commerce

env
- MONGODB_URI=mongodb+srv://username:password@cluster0.m4sss.mongodb.net/ecommerce
- MONGO_DB_NAME=ecommerce
- PORT=3000
- JWT_SECRET=super-secret-key

- swagger docs available at http://localhost:3000/api/docs




```bash
$ npm install
```

##### Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start --watch

# production mode
$ npm run start:prod
```

