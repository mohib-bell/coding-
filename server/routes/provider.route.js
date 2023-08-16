module.exports = (app) => {
  const router = require("express").Router();
  const provider = require("../controllers/provider.controller");
  router.post("/", provider.create);

  // Retrieve all provider
  router.get("/", provider.findAll);

  // Retrieve all True provider
  // router.get("/status", provider.findAllTrue);

  // Retrieve a single provider with id
  router.get("/:id", provider.findOne);

  // Update a provider with id
  router.put("/:id", provider.update);

  // Delete a provider with id
  router.delete("/:id", provider.delete);

  // Delete all provider
  router.delete("/", provider.deleteAll);

  app.use("/api/providers", router);
};
