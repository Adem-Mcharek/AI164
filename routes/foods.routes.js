module.exports = (app) => {
    const foods = require("../controllers/foods.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Food item
    router.post("/", foods.create);
  
    // Retrieve all Food items
    router.get("/", foods.findAll);
  
    // Retrieve a single Food item with id
    router.get("/:food_id", foods.findOne);
  
    // Update a Food item with id
    router.put("/:food_id", foods.update);
  
    // Delete a Food item with id
    router.delete("/:food_id", foods.delete);
  
    // Delete all Food items
    router.delete("/", foods.deleteAll);
  
    app.use('/api/foods', router);
  };
  