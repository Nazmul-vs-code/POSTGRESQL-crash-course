import { Router } from "express";
import { CreateUser, ViewUser } from "../controller/UserController.js";

export let UserRoutes = Router()

UserRoutes.post('/create', CreateUser);


UserRoutes.get('/view', ViewUser);