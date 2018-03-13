// controller to get TODO
// GET /todo/:id
export const getTodo = (req, res) => {
  res.status(200).send('Get Todo');
};

// controller to create TODO
// POST /todo/create
export const createTodo = (req, res) => {
  res.status(200).send('Todo Created');
};

// controller to update TODO
// PUT /todo/:id
export const updateTodo = (req, res) => {
  res.status(200).send('Todo Updated');
};

// controller to delete TODO
// DELETE /todo/:id
export const deleteTodo = (req, res) => {
  res.status(200).send('Todo Deleted');
};
