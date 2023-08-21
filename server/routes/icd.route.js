module.exports = (app) => {
    const router = require("express").Router();
    const icd = require("../controllers/icd.controller");
    router.post("/", icd.create);
  
    // Retrieve all icd
    router.get("/", icd.findAll);
  
    // Retrieve all True icd
    // router.get("/status", icd.findAllTrue);
  
    // Retrieve a single icd with id
    router.get("/:id", icd.findOne);
  
    // Update a icd with id
    router.put("/:id", icd.update);
  
    // Delete a icd with id
    router.delete("/:id", icd.delete);
  
    // Delete all icd
    router.delete("/", icd.deleteAll);
  
    app.use("/api/icds", router);
  };
  