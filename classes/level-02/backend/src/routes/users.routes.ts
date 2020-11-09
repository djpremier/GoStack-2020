import { Router } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
  const usersRepository = getRepository(User);
  const users = await usersRepository.find();

  return res.json(users);
});

usersRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    delete user.password;

    return res.json(user);
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});

export default usersRouter;
