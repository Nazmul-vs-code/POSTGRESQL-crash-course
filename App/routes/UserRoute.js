import { Router } from "express";
import { CreateUser } from "../controller/UserController.js";

export let UserRoutes = Router()

UserRoutes.post('/create', CreateUser)


