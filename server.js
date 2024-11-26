const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const dotenv = require('dotenv');
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");

const connectDB = require('./db');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/', routes);

connectDB();

const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Proyecto 6",
        version: "1.0.0",
      },
      servers: [
        {
          url: `http://localhost:${PORT}`,
        },
      ],
      components: {
        securitySchemes: {
          ApiKeyAuth: {
            type: "apiKey",
            in: "header",
            name: "x-auth-token",
          },
        },
      },
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`],
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);

const PORT = process.env.PORT || 5000;
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

 
