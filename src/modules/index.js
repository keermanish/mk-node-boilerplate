import express from 'express';

import todoRoutes from './todo/todo.routes';

// routes for entire application
const routes = new express.Router();

/**
 * routes to manage Todo
 * GET /todo/:id [all/id]
 * POST /todo
 * PUT /todo/:id
 * DELETE /todo/:id
 */
routes.use('/todo', todoRoutes);

export default routes;
