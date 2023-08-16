const db = require("../config/dbConnection");
const Patient = db.Patient;
const { getPagination, getPagingData } = require("../common/index");
// const Op = db.Sequelize.Op;


// Create and Save a new Patient
exports.create = (req, res) => {
  // Validate request
  if (!req.body.patientFirstName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a patient
  const patient = {
    patientFirstName: req.body.patientFirstName,
    patientLastName: req.body.patientLastName,
    account: req.body.account,
    dob: req.body.dob,
    provider: req.body.provider,
    location: req.body.location,
    email: req.body.email,
    address: req.body.address,
    status: req.body.status ? req.body.status : false,
  };

  // Save Patient in the database
  Patient.create(patient)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Patient.",
      });
    });
};

// Retrieve all Patients from the database.
// exports.findAll = (req, res) => {
//   const id = req.query.id;
//   var condition = id ? { id: `${id}` } : null;
//   Patient.findAll({ where: condition })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while retrieving Patient.",
//       });
//     });
// };

exports.findAll = (req, res) => {
  const { page, size, title, id } = req.query;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  var condition = id ? { id: `${id}` } : null;
  const { limit, offset } = getPagination(page, size);

  Patient.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving patients.",
      });
    });
};

// Find a single Patient with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Patient.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving patient with id=" + id,
      });
    });
};

// Update a Patient by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Patient.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Patient was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Patient with id=${id}. Maybe Patient was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Patient with id=" + id,
      });
    });
};

// Delete a Patient with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Patient.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Patient was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Patient with id=${id}. Maybe Patient was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Patient with id=" + id,
      });
    });
};

// Delete all Patients from the database.
exports.deleteAll = (req, res) => {
  Patient.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Patients were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Patients.",
      });
    });
};

// Find all published Patients
exports.findAllTrue = (req, res) => {
  Patient.findAll({ where: { status: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving PatientS.",
      });
    });
};
