const db = require("../config/dbConnection");
const Icd = db.Icd;
const { getPagination, getPagingData } = require("../common/index");

// Create and Save a new Icd
exports.create = (req, res) => {
  // Validate request
  if (!req.body.icdCode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Icd
  const icd = {
    icdCode: req.body.icdCode,
    description: req.body.description,
  };

  // Save icd in the database
  Icd.create(icd)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the icd.",
      });
    });
};

// Retrieve all Icd from the database.
exports.findAll = (req, res) => {
  const { page, size, title, id } = req.query;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  var condition = id ? { id: `${id}` } : null;
  const { limit, offset } = getPagination(page, size);

  Icd.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Icds.",
      });
    });
};

// Find a single Icd with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Icd.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Icd with id=" + id,
      });
    });
};

// Update a Icd by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Icd.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Icd was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Icd with id=${id}. Maybe Icd was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Icd with id=" + id,
      });
    });
};

// Delete a Icd with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Icd.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Icd was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Icd with id=${id}. Maybe Icd was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Icd with id=" + id,
      });
    });
};

// Delete all Icd from the database.
exports.deleteAll = (req, res) => {
  Icd.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Icds were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Icds.",
      });
    });
};
