import express, { Router } from "express";
import { register, login, getUser,getUsers } from "../controller/userController.js";


const router = Router()

router.post('/register', register);
router.post('/login', login);
router.get('/:id', getUser);
router.get('/', getUsers);

export default router;
