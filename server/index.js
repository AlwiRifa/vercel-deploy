const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "https://vercel-deploy-client.vercel.app", // Sesuaikan dengan alamat client Anda
  })
);


// Route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from server" });
});


const port = 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
