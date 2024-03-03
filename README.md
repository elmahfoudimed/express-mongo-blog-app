# Node.js Blog App

This is a Node.js blog application built with Express.js and MongoDB. It includes user authentication using Passport.js and password hashing with bcrypt.

## Features

- User authentication (signup, login, logout)
- Create, read, update, and delete blog posts

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Passport.js
- Mongoose
- Bcrypt

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/elmahfoudimed/express-mongo-blog-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd express-mongo-blog-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Define the following variables in the `.env` file:
        - `MONGODB_URI`: MongoDB connection URI
        - `SECRET`: Secret key for session management
        - `PORT`

5. Start the server:
    ```bash
    npm start
    ```

## API Usage

You can interact with the API endpoints using Postman or any other HTTP client. Here are the available endpoints:

- **POST /register**: Create a new user account.
- **POST /login**: Log in to an existing user account.
- **GET /logout**: Log out the current user.
- **GET /posts**: Get all blog posts.
- **POST /posts**: Create a new blog post.
- **PUT /posts/:id**: Update a specific blog post.
- **DELETE /posts/:id**: Delete a specific blog post.

## Folder Structure

```
express-mongo-blog-app/
|-- node_modules/
|-- src/
|   |-- config/
|   |   |-- passport.js
|   |-- controllers/
|   |   |-- userController.js
|   |   |-- postController.js
|   |-- helpers/
|   |   |-- password.js
|   |-- middleware/
|   |   |-- authentication.js
|   |-- models/
|   |   |-- User.js
|   |   |-- Post.js
|   |-- routes/
|   |   |-- userRoutes.js
|   |   |-- postRoutes.js
|   |-- app.js
|-- .env
|-- package.json
```

## Acknowledgements

I would like to extend my sincere thanks to ARK-x Talent Factory for providing me with the opportunity to learn and grow as a developer. Their guidance, resources, and support have been instrumental in helping me acquire the skills to realize projects like this blog app. I'm grateful for the invaluable learning experience and the chance to be part of the ARK-x community.

