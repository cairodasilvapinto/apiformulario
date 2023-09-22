import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { ListUsersController } from "../modules/users/useCases/listUsers/ListUsersController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/", listUsersController.handler);

export { usersRoutes };
