const sql = require("./db.js");
// Constructor
const Food = function(food) {
    this.name = food.name;
    this.description = food.description;
    this.price = food.price;
    this.ingredient_id = food.ingredient_id;
  };
  
  // Create a new food item
  Food.create = (newFood, result) => {
    sql.query("INSERT INTO Foods SET ?", newFood, (err, res) => {
      if (err) {
        console.log("Error creating food: ", err);
        result(err, null);
        return;
      }
  
      console.log("Created food item: ", { food_id: res.insertId, ...newFood });
      result(null, { food_id: res.insertId, ...newFood });
    });
  };
  
  // Find a food item by ID
  Food.findById = (food_id, result) => {
    sql.query(`SELECT * FROM Foods WHERE food_id = ${food_id}`, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found food item: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // Food item with the ID was not found
      result({ kind: "not_found" }, null);
    });
  };
  
  // Get all food items (with optional filtering by title)
  Food.getAll = (title, result) => {
    let query = "SELECT * FROM Foods";
  
    if (title) {
      query += ` WHERE name LIKE '%${title}%'`;
    }
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Food items: ", res);
      result(null, res);
    });
  };
  
  // Update a food item by ID
  Food.updateById = (food_id, food, result) => {
    sql.query(
      "UPDATE Foods SET name = ?, description = ?, price = ?, ingredient_id = ? WHERE food_id = ?",
      [food.name, food.description, food.price, food.ingredient_id, food_id],
      (err, res) => {
        if (err) {
          console.log("Error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // Food item with the ID was not found
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("Updated food item: ", { food_id: food_id, ...food });
        result(null, { food_id: food_id, ...food });
      }
    );
  };
  
  // Delete a food item by ID
  Food.remove = (food_id, result) => {
    sql.query("DELETE FROM Foods WHERE food_id = ?", food_id, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // Food item with the ID was not found
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("Deleted food item with ID: ", food_id);
      result(null, res);
    });
  };
  
  // Delete all food items
  Food.removeAll = result => {
    sql.query("DELETE FROM Foods", (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`Deleted ${res.affectedRows} food items`);
      result(null, res);
    });
  };
  
  module.exports = Food;