// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const routes = require("./routes");

// const app = express();

// const PORT = process.env.PORT || 3000;

// const router = express.Router();

// // app.use(cors());
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   console.log(`Method: ${req.method} ${req.path}`);
//   next();
// });

// routes.forEach((route) => app.use(route));

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const prisma = new PrismaClient();

app.post("/submit-data", async (req, res) => {
  const data = req.body.data;
  try {
    const formData = await prisma.formData.create({
      data: {
        data: data,
      },
    });
    console.log("Data inserted:", formData);
    res.send("Data inserted");
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Error inserting data");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
