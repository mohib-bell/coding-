const db = require("../config/dbConnection");
const Provider = db.Provider;
const { getPagination, getPagingData } = require("../common/index");

// Create and Save a new Provider
exports.create = (req, res) => {
  // Validate request
  if (!req.body.providerName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a provider
  const provider = {
    providerName: req.body.providerName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    npi: req.body.npi,
    taxonomyCode: req.body.taxonomyCode,
    status: req.body.status ? req.body.status : "false",
  };

  // Save provider in the database
  Provider.create(provider)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the provider.",
      });
    });
};

// Retrieve all Provider from the database.
exports.findAll = (req, res) => {
  const { page, size, title, id } = req.query;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  var condition = id ? { id: `${id}` } : null;
  const { limit, offset } = getPagination(page, size);

  Provider.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving providers.",
      });
    });
};

// Find a single Provider with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Provider.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Provider with id=" + id,
      });
    });
};

// Update a Provider by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Provider.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Provider was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Provider with id=${id}. Maybe Provider was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Provider with id=" + id,
      });
    });
};

// Delete a Provider with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Provider.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Provider was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Provider with id=${id}. Maybe Provider was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Provider with id=" + id,
      });
    });
};

// Delete all Provider from the database.
exports.deleteAll = (req, res) => {
  Provider.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Providers were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Providers.",
      });
    });
};
