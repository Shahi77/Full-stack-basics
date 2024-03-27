const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      first_name: "Sarena",
      last_name: "Smallshaw",
    },
    {
      id: 2,
      first_name: "Sharlene",
      last_name: "Brizell",
    },
    {
      id: 3,
      first_name: "Zollie",
      last_name: "Gilbertson",
    },
    {
      id: 4,
      first_name: "Kaleb",
      last_name: "Pitceathly",
    },
    {
      id: 5,
      first_name: "Florenza",
      last_name: "Cullinane",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
