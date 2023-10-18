const Food = require("../models/foods.model.js");

// Create and Save a new Food item
exports.create = (req, res) => {
  // Get the data from the request body
  const newFood = new Food({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    ingredient_id: req.body.ingredient_id
  });

  // Call the create method for the Food model
  Food.create(newFood, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "An error occurred while creating the Food item."
      });
    } else {
      res.status(201).json(data);
    }
  });
};

// Retrieve all Food items from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Food.getAll(title, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving Food items."
      });
    } else {
      res.status(200).json(data);
    }
  });
};

// Find a single Food item with an ID
exports.findOne = (req, res) => {
  Food.findById(req.params.food_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Food item with id ${req.params.food_id} not found.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Food item with id " + req.params.food_id
        });
      }
    } else {
      res.status(200).json(data);
    }
  });
};

// Find all published Food items
exports.findAllPublished = (req, res) => {
  Food.getAllPublished((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving published Food items."
      });
    } else {
      res.status(200).json(data);
    }
  });
};

// Update a Food item identified by the ID in the request
exports.update = (req, res) => {
  Food.updateById(
    req.params.food_id,
    new Food(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Food item with id ${req.params.food_id} not found.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Food item with id " + req.params.food_id
          });
        }
      } else {
        res.status(200).json(data);
      }
    }
  );
};

// Delete a Food item with the specified ID in the request
exports.delete = (req, res) => {
    Food.remove(req.params.food_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Food item with id ${req.params.food_id} not found.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Food item with id " + req.params.food_id
          });
        }
      } else {
        res.status(204).send(); // No content response
      }
    });
  };
  
  // Delete all Food items from the database
  exports.deleteAll = (req, res) => {
    Food.removeAll((err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "An error occurred while deleting all Food items."
        });
      } else {
        res.status(204).send(); // No content response
      }
    });
  };
