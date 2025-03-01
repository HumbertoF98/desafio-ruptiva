import { Request, Response } from "express";
import AuthenticateUserService from "../services/AuthenticateUserService";

class SessionsController {
  public async create(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const authenticateUser = new AuthenticateUserService();

      const { user, token } = await authenticateUser.execute({
        email,
        password,
      });

      delete user.password;

      return response.status(200).json({ user, token });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}
export default new SessionsController();
