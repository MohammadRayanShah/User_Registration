var Userdb = require("../model/model");

//Create and save new users
exports.create = (req, res) => {
  //validation
  if (!req.body) {
    res.status(400).send({ message: "Content body cannot be empty" });
    return;
  }
  //New user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //save user in the database
  user
    .save(user)
    .then((data) => {
      //res.send(data);
      res.redirect("/add-user");
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "some error occured while creating" });
    });
};

//retrieve and return all users/retrieve and return a single user
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "User not found!" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error,user not found" });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: err.message || "User could not be found!" });
      });
  }
};

//update a new identified user by user ID
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(500).send({ message: "Data to update cannot be empty" });
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "User not found!" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error,User not updated" });
    });
};

//delete a user by specified user ID in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "User not found!" });
      } else {
        res.send({ message: "User deleted" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Some error occured!,user not deleted" });
    });
};
