import { Request, Response } from 'express';
import UsersService from '../services/user.services';
import generateJWT from '../utils/token';

export default class UserController {
  constructor(private usersService = new UsersService()) {}

  async create(req:Request, res: Response):Promise<void> {
    const { username, vocation, level, password } = req.body;
    const newUser = await this.usersService.create(username, vocation, level, password);
    if (newUser) {
      const token = generateJWT(Number(newUser.id));
      res.status(201).json({ token });
    }
  }
}