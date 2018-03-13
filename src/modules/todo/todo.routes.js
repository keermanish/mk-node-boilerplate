import express from 'express';

import { getTodo, createTodo, updateTodo, deleteTodo } from './todo.controller';

const todoRoutes = new express.Router();

// route to get TODO
// GET /todo/:id
todoRoutes.get('/:id', getTodo);

// route to update TODO
// PUT /todo/:id
todoRoutes.put('/:id', updateTodo);

// route to create TODO
// POST /todo/create
todoRoutes.post('/create', createTodo);

// route to delete TODO
// DELETE /todo/:id
todoRoutes.delete('/:id', deleteTodo);

export default todoRoutes;
