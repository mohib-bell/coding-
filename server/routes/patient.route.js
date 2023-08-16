module.exports = (app) => {
  const router = require("express").Router();
  const patients = require("../controllers/patient.controller");
  router.post("/", patients.create);

  // Retrieve all patients
  router.get("/", patients.findAll);

  // Retrieve all True patients
  router.get("/status", patients.findAllTrue);

  // Retrieve a single patients with id
  router.get("/:id", patients.findOne);

  // Update a patients with id
  router.put("/:id", patients.update);

  // Delete a patients with id
  router.delete("/:id", patients.delete);

  // Delete all patients
  router.delete("/", patients.deleteAll);

  app.use("/api/patients", router);
};
