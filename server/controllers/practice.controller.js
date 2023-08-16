const db = require("../config/dbConnection");
const Practice = db.Practice;
const { getPagination, getPagingData } = require("../common/index");

// Create and Save a new Practice
exports.create = (req, res) => {
  // Validate request
  if (!req.body.practiceName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a practice
  const practice = {
    practiceName: req.body.practiceName,
    practiceCode: req.body.practiceCode,
    teamName: req.body.teamName,
    taxonomyID: req.body.taxonomyID,
    npi: req.body.npi,
    status: req.body.status ? req.body.status : "false",
  };

  // Save practice in the database
  Practice.create(practice)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the practice.",
      });
    });
};

// Retrieve all Practices from the database.
exports.findAll = (req, res) => {
  const { page, size, title, id } = req.query;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  var condition = id ? { id: `${id}` } : null;
  const { limit, offset } = getPagination(page, size);

  Practice.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving practices.",
      });
    });
};

// Find a single Practice with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Practice.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Practice with id=" + id,
      });
    });
};

// Update a Practice by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Practice.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Practice was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Practice with id=${id}. Maybe Practice was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Practice with id=" + id,
      });
    });
};

// Delete a Practice with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Practice.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Practice was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Practice with id=${id}. Maybe Practice was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Practice with id=" + id,
      });
    });
};


// Delete all Practice from the database.
exports.deleteAll = (req, res) => {
    Practice.destroy({
      where: {},
      truncate: false,
    })
      .then((nums) => {
        res.send({ message: `${nums} Practices were deleted successfully!` });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Practices.",
        });
      });
  };