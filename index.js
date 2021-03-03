const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const corsOptions = {
  option: "http://localhost:3000",
};
app.use(express.static("client/build"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors(corsOptions));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const itemsSchema = {
  name: String,
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome to your todolist!",
});

const item2 = new Item({
  name: "Hit the + button to add a new item",
});

const item3 = new Item({
  name: "Hit the trash icon to delete an item.",
});

const defaultItems = [item1, item2, item3];

// const listSchema = {
//   name: String,
//   items: [itemsSchema],
// };

// const List = mongoose.model("List", listSchema);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.get("/entirelist", (req, res) => {
  Item.find({}, function (err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully saved default items to DB.");
        }
      });
      res.redirect("/entirelist");
    } else {
      res.send(foundItems);
    }
  });
});

// app.get("/:customListName", function (req, res) {
//   const customListName = req.params.customListName;
//   List.findOne({ name: customListName }, function (err, foundList) {
//     if (!err) {
//       if (!foundList) {
//         //Create a new list
//         const list = new List({
//           name: customListName,
//           items: defaultItems,
//         });

//         list.save();
//       } else {
//         //Show an existing list
//         console.log(foundList);
//         res.send(foundList);
//       }
//     }
//   });
// });

app.post("/post", (req, res) => {
  const postName = req.body.post;
  const newPost = new Item({
    name: postName,
  });
  newPost.save();
});

app.post("/delete", (req, res) => {
  const checkedItemId = req.body.postID;
  Item.findByIdAndRemove(checkedItemId, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully removed post from DB!");
    }
  });
});

const PORT = process.env.PORT || 3001;
console.log("server started on port: ", PORT);

app.listen(PORT);

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });
