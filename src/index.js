const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Router
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.get("/api/clients", (req, res) => {
  res.send("List Clients");
});

app.listen(port, () => {
  console.log("====================================");
  console.log(`App en el puerto http://localhost:${port}`);
  console.log("====================================");
});
