const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/api/clients", (req, res) => {
  res.send("List Clients");
});

app.listen(port, () => {
  console.log("====================================");
  console.log(`App en el puerto hhtp://localhost:${port}`);
  console.log("====================================");
});
