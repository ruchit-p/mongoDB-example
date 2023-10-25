# mongoDB-example

This repository showcases a simple example of how to post data from an HTML form to MongoDB Atlas using Express and Mongoose.

## Features

- **HTML Form**: A basic form that allows users to input a title and content. The form is styled using Bootstrap. [View Here](https://github.com/ruchit-p/mongoDB-example/blob/main/index.html)

- **Server**: The server is set up using Express and connects to MongoDB Atlas using Mongoose. It listens for POST requests from the form and saves the data to the database. [View Code](https://github.com/ruchit-p/mongoDB-example/blob/main/server.js)

## Technical Details

- **Express**: Used as the web server framework.
  
- **Mongoose**: Provides a straight-forward, schema-based solution to model application data with MongoDB.
  
- **body-parser**: Middleware to parse incoming request bodies.

## Getting Started

1. Clone the repository: `git clone https://github.com/ruchit-p/mongoDB-example.git`
2. Navigate to the project directory: `cd mongoDB-example`
3. Install the required dependencies: `npm install`
4. Start the server: `npm start`
5. Open your browser and visit `http://localhost:3000`

## Dependencies

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Contributing

If you'd like to contribute or have any suggestions, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.
