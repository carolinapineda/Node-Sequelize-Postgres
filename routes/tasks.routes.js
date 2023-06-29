import { Router } from "express";
import { deleteTask, getTaskPorId, getTasks, postTask, putTask } from "../controllers/tasks.js";
const router = Router();

router.get('/tasks', getTasks);

router.post('/tasks', postTask);

router.put('/tasks/:id', putTask);

router.delete('/tasks/:id', deleteTask);

router.get('/tasks/:id', getTaskPorId);

export default router;