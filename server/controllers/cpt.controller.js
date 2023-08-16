const db = require("../config/dbConnection");
const Cpt = db.Cpt;
const { getPagination, getPagingData } = require("../common/index");

// Create and Save a new Cpt
exports.create = (req, res) => {
  // Validate request
  if (!req.body.cptCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Cpt
  const cpt = {
    cptCode: req.body.cptCode,
    description: req.body.description,
    fee: req.body.fee,
    tos: req.body.tos,
    speciality: req.body.speciality,
    category: req.body.category,
    status: req.body.status ? req.body.status : "false",
  };

  // Save cpt in the database
  Cpt.create(cpt)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the cpt.",
      });
    });
};

// Retrieve all Cpt from the database.
exports.findAll = (req, res) => {
  const { page, size, title, id } = req.query;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  var condition = id ? { id: `${id}` } : null;
  const { limit, offset } = getPagination(page, size);

  Cpt.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cpts.",
      });
    });
};

// Find a single Cpt with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Cpt.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Cpt with id=" + id,
      });
    });
};

// Update a Cpt by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Cpt.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Cpt was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Cpt with id=${id}. Maybe Cpt was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Cpt with id=" + id,
      });
    });
};

// Delete a Cpt with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Cpt.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Cpt was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Cpt with id=${id}. Maybe Cpt was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Cpt with id=" + id,
      });
    });
};

// Delete all Cpt from the database.
exports.deleteAll = (req, res) => {
  Cpt.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Cpts were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Cpts.",
      });
    });
};
