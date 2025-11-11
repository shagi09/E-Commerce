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

#### Project Structure

ecommerce-api/
├── src/
│   ├── app.module.ts                   # Root module
│   ├── main.ts                         # Application bootstrap
│   │
│   ├── auth/                           # Authentication & Authorization
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── auth.controller.ts
│   │   ├── jwt.strategy.ts
│   │   ├── jwt-auth.guard.ts
│   │   ├── roles.guard.ts
│   │   └── decorators/
│   │       └── roles.decorator.ts
│   │
│   ├── users/                          # User Management
│   │   ├── users.module.ts
│   │   ├── users.service.ts
│   │   ├── users.controller.ts
|   |   |
│   │   └── schemas/
│   │       └── user.schema.ts
│   │
│   ├── products/                       # Product Management
│   │   ├── products.module.ts
│   │   ├── products.service.ts
│   │   ├── products.controller.ts
│   │   ├── dto/
│   │   │   ├── create-product.dto.ts
│   │   │   └── update-product.dto.ts
│   │   └── schemas/
│   │       └── product.schema.ts
│   │
│   ├── orders/                         # Orders & Checkout
│   │   ├── orders.module.ts
│   │   ├── orders.service.ts
│   │   ├── orders.controller.ts
│   │   ├── dto/
│   │   │   └── create-order.dto.ts
│   │   └── schemas/
│   │       └── order.schema.ts
│   │
|   |
│   │
│   └── config/                         # Configuration & environment
│       └── configuration.ts
│
|                             
│
├── .env                                # Environment variables
├── nest-cli.json
├── package.json
├── tsconfig.json
└── README.md


##### Project setup

- git clone https://github.com/shagi09/E-Commerce.git
- cd E-commerce

env
- MONGODB_URI=mongodb+srv://shala:shalom1994@cluster0.m4sss.mongodb.net/ecommerce
- MONGO_DB_NAME=ecommerce
- PORT=3000
- JWT_SECRET=super-secret-key

- swagger docs available at http://localhost:3000/api/docs




```bash
$ npm install
```

###### Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start --watch

# production mode
$ npm run start:prod
```

