import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import User from "../models/User";

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error("Incorrect email/password combination.");
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error("Incorrect email/password combination.");
    }

    // secret md5 generator
    const token = sign({}, "3cff642bb2e42d1ba3785a0de8f54dea", {
      subject: user.id,
      expiresIn: "3d",
    });

    return {
      user,
      token,
    };
  }
}
export default AuthenticateUserService;
