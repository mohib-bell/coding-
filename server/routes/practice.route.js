module.exports = (app) => {
    const router = require("express").Router();
    const practices = require("../controllers/practice.controller");
    router.post("/", practices.create);
  
    // Retrieve all practices
    router.get("/", practices.findAll);
  
    // Retrieve all True practices
    // router.get("/status", practices.findAllTrue);
  
    // Retrieve a single practices with id
    router.get("/:id", practices.findOne);
  
    // Update a practices with id
    router.put("/:id", practices.update);
  
    // Delete a practices with id
    router.delete("/:id", practices.delete);
  
    // Delete all practices
    router.delete("/", practices.deleteAll);
  
    app.use("/api/practices", router);
  };