import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";

class UserController {
  public async create(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const createUser = new CreateUserService();

      const user = await createUser.execute({
        email,
        password,
      });

      delete user.password;

      return response.status(200).json({ user });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}
export default new UserController();
