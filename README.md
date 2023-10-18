# AI164
my class project website

This documentation provides an overview of the Food API in Node.js, which offers CRUD operations for managing food items in a MySQL database.

Endpoints

Create a New Food Item

POST /api/foods

Description: Create a new food item.

Response: 201 on success, 500 on error.



Retrieve All Food Items

GET /api/foods

Description: Retrieve a list of all food items.

Response: 200 on success, 500 on error.




Retrieve a Single Food Item

GET /api/foods/:food_id

Description: Retrieve a specific food item by ID.

Response: 200 on success, 404 if not found, 500 on error.





Retrieve All Published Food Items

GET /api/foods/published

Description: Retrieve all published food items.

Response: 200 on success, 500 on error.





Update a Food Item

PUT /api/foods/:food_id

Description: Update an existing food item.

Response: 200 on success, 404 if not found, 500 on error.





Delete a Food Item

DELETE /api/foods/:food_id

Description: Delete a specific food item.

Response: 204 on success, 404 if not found, 500 on error.





Delete All Food Items

DELETE /api/foods

Description: Delete all food items.

Response: 204 on success, 500 on error.





