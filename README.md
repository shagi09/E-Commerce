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


 npm install

#### Compile and run the project


# watch mode
npm run start --watch

##### Environment Variables

Create a `.env` file in the root folder:

dotenv
MONGO_URI=mongodb+srv://username:password@cluster0.m4sss.mongodb.net/ecommerce
MONGO_DB_NAME=ecommerce
PORT=3000
JWT_SECRET=super-secret-key



###### API Endpoints

###### Auth
- `POST /auth/signup` – register user (role: user/admin)
- `POST /auth/login` – login user

###### Products
- `GET /products` – list all products (public)
- `GET /products/:id` – get specific product (public)
- `POST /products/create` – create product (admin)
- `PUT /products/:id` – update product (admin)
- `DELETE /products/:id` – delete product (admin)

#### Orders
- `POST /orders` – create order (authenticated users)
- `GET /orders` – get user's orders (authenticated users)



