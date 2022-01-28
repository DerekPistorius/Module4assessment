const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);

});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Welcome change",
    "Wish you happiness",
    "You can see a lot just by looking",
    "You love chinese food",
    "Your reputation is your wealth"
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);

});


let name1 = ''
let name2 = ''

app.post("/api/post", (req, res) => {
  const body = req.body
  const id = body.id
  const newName = body.name
  let response = ''

  if (id === 1) {
    // we're modifying name1
    name1 = newName
    response = name1
  } else {
    // we're modifying name2
    name2 = newName
    response = name2
  }

  // send a response back to the front end
  // 200 means ok
  res.status(200).send(response)
})

app.put("/api/put", (req, res) => {
  const body = req.body
  const id = body.id
  const newName = body.name
  let response = ''

  if (id === 1) {
    // we're modifying name1
    name1 = newName
    response = name1
  } else {
    // we're modifying name2
    name2 = newName
    response = name2
  }

  // send a response back to the front end
  // 200 means ok
  res.status(200).send(response)
})

app.delete("/api/delete", (req, res) => {
  const body = req.body
  const id = body.id
  const newName = body.name
  let response = ''

  if (id === 1) {
    // we're modifying name1
    name1 = newName
    response = name1
  } else {
    // we're modifying name2
    name2 = newName
    response = name2
  }

  // send a response back to the front end
  // 200 means ok
  res.status(200).send(response)
})

app.listen(4000, () => console.log("Server running on 4000"))