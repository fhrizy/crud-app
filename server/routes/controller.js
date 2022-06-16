const db = require("../models");
const Crud = db.crud;

// const getPagination = (page, size) => {
//   const limit = size ? +size : 3;
//   const offset = page ? page * limit : 0;
//   return { limit, offset };
// };

exports.register = (req, res) => {
  const { username, password } = req.body;
  const crud = { username, password };
  // Validate request
  if (!(username && password)) {
    return res.status(400).send({
      message: "Data cannot be empty!",
    });
  }

  // Save crud in the database
  Crud.create(crud)
    .then((data) => {
      res.status(200).json({ data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the crud.",
      });
    });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const crud = { username, password };
  // Validate request
  if (!(username && password)) {
    return res.status(400).send({
      message: "Data cannot be empty!",
    });
  }

  // Save crud in the database
  Crud.find({ username, password })
    .then((data) => {
      res.status(200).json({ data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the crud.",
      });
    });
};

exports.create = (req, res) => {
  const { firstName, lastName, email, phone, address } = req.body;
  const crud = { firstName, lastName, email, phone, address };
  // Validate request
  if (!(firstName && lastName && email && phone && address)) {
    return res.status(400).send({
      message: "Data cannot be empty!",
    });
  }

  // Save crud in the database
  Crud.create(crud)
    .then((data) => {
      res.status(200).json({ data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the crud.",
      });
    });
};

exports.findAll = (req, res) => {
  // const { page, size } = req.query;
  // const { limit, offset } = getPagination(page, size);
  Crud.find({
    // limit,
    // offset,
  })
    .then((data) => {
      res.status(200).json({
        data: data,
        // totalItems: data.totalDocs,
        // totalPages: data.totalPages,
        // currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving cruds.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Crud.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found crud with id = " + id });
      else res.status(200).json({ data: data });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving crud with id = " + id });
    });
};

exports.update = (req, res) => {
  const { firstName, lastName, email, phone, address } = req.body;
  // Validate request
  if (!(firstName && lastName && email && phone && address)) {
    return res.status(400).send({
      message: "Data cannot be empty!",
    });
  }
  const id = req.params.id;
  Crud.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update crud with id = ${id}. Maybe crud was not found!`,
        });
      } else res.send({ message: "crud was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating crud with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Crud.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete crud with id = ${id}. Maybe crud was not found!`,
        });
      } else {
        res.send({
          message: "crud was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete crud with id = " + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Crud.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} cruds were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all cruds.",
      });
    });
};
