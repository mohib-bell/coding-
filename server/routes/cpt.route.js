module.exports = (app) => {
  const router = require("express").Router();
  const cpt = require("../controllers/cpt.controller");
  router.post("/", cpt.create);

  // Retrieve all cpt
  router.get("/", cpt.findAll);

  // Retrieve all True cpt
  // router.get("/status", cpt.findAllTrue);

  // Retrieve a single cpt with id
  router.get("/:id", cpt.findOne);

  // Update a cpt with id
  router.put("/:id", cpt.update);

  // Delete a cpt with id
  router.delete("/:id", cpt.delete);

  // Delete all cpt
  router.delete("/", cpt.deleteAll);

  app.use("/api/cpts", router);
};
