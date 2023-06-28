import {Router} from 'express';
import {deleteProject, getProjects, postProject, putProject} from '../controllers/projects.js'

const router = Router();

router.get('/projects', getProjects)

router.post('/projects', postProject)

router.put('/projects/:id', putProject)

router.delete('/projects/:id', deleteProject)

router.get('/projects/:id')

export default router;