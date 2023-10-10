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

// const express = require("express");
// const { PrismaClient } = require("@prisma/client");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));

// const prisma = new PrismaClient();

// app.post("/submit-data", async (req, res) => {
//   const data = req.body.data;
//   try {
//     const formData = await prisma.formData.create({
//       data: {
//         data: data,
//       },
//     });
//     console.log("Data inserted:", formData);
//     res.send("Data inserted");
//   } catch (error) {
//     console.error("Error inserting data:", error);
//     res.status(500).send("Error inserting data");
//   }
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// const express = require("express");
// const { PrismaClient } = require("@prisma/client");

// const app = express();
// const prisma = new PrismaClient();

// app.use(express.json());

// app.post("/create-table", async (req, res) => {
//   try {
//     await prisma.$queryRaw(
//       "CREATE TABLE IF NOT EXISTS TableName (id INT AUTO_INCREMENT PRIMARY KEY, address VARCHAR(191) NOT NULL,deskription VARCHAR(191) NOT NULL,eMail VARCHAR(191) NOT NULL,name VARCHAR(191) NOT NULL,sum INTEGER NOT NULL)"
//     );
//     res.status(200).json({ message: "Table created successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error creating table" });
//   }
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// app.js
const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const mysql = require("mysql2");

const prisma = new PrismaClient();

// Konfigurasi koneksi ke database MySQL di Aiven
const db = mysql.createConnection({
  host: "mysql-737383a-wtri32445-e17e.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_4pIpDyfVWyVyI79N5yY",
  database: "defaultdb",
  port: 15087,
});

// Koneksi ke database MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint untuk menyimpan data ke database MySQL
app.post("/api/saveData", async (req, res) => {
  try {
    const { name, eMail, title, sum, address, description } = req.body;

    // Simpan data ke tabel di database menggunakan Prisma
    const newData = await prisma.tableName.create({
      data: {
        name,
        eMail,
        title,
        sum,
        address,
        decription,
      },
    });

    res.json({ message: "Data berhasil disimpan", data: newData });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Terjadi kesalahan saat menyimpan data" });
  }
});

// Port untuk server backend
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
