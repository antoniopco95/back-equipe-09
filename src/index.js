const express = require("express");
const rotas = require("./routes");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  cors({
    origin: "https://localhost:3000",
    methods: ["GET", "POST", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(rotas);

app.listen(PORT, () => {
  console.log(`Server on na rota ${PORT}`);
});
