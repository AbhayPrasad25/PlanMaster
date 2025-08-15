# PlanMaster - Project Management System

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

PlanMaster is a robust project management system designed to streamline task organization, team collaboration, and project tracking. Built with Node.js, Express, and MongoDB, it provides a comprehensive solution for managing projects efficiently.

## Features

- **User Authentication & Authorization**
  - Secure registration and login system
  - Role-based access control (Admin, Project Admin, Member)
  - Email verification via Mailtrap
  - JWT-based authentication

- **Project Management**
  - Create and organize projects
  - Assign team members with specific roles
  - Track project progress and deadlines

- **Task Management**
  - Create, update, and prioritize tasks
  - Track task status (Todo, In Progress, Done)
  - Assign tasks to team members

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Email Service**: Nodemailer with Mailtrap
- **Validation**: Express-validator

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/AbhayPrasad25/PlanMaster.git
   cd PlanMaster
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=8000
   CORS_ORIGIN=*

   ACCESS_TOKEN_SECRET=your_access_token_secret
   ACCESS_TOKEN_EXPIRY=1d

   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   REFRESH_TOKEN_EXPIRY=10d

   MAILTRAP_SMTP_HOST=sandbox.smtp.mailtrap.io
   MAILTRAP_SMTP_PORT=2525
   MAILTRAP_SMTP_USER=your_mailtrap_user
   MAILTRAP_SMTP_PASS=your_mailtrap_password
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login existing user
- `GET /api/v1/healthcheck` - Check if the API is running

### Projects (Coming Soon)

- Create, read, update, and delete projects
- Manage project members and their roles

### Tasks (Coming Soon)

- Create, read, update, and delete tasks
- Change task status and assignees

## Project Structure

```
PlanMaster/
├── src/
│   ├── controllers/       # Route controllers
│   ├── db/                # Database configuration
│   ├── middlewares/       # Express middlewares
│   ├── models/            # Mongoose models
│   ├── routes/            # Express routes
│   ├── utils/             # Utility functions
│   ├── validators/        # Input validation
│   ├── app.js             # Express app
│   └── index.js           # Entry point
├── public/                # Static files
├── .env                   # Environment variables
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Developed by Abhay Prasad
