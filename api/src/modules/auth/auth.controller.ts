import { Request, Response } from "express";
import authService from "./auth.service";

class AuthController {
  login(req: Request, res: Response) {
    const { username, password } = req.body;
    const result = authService.usernamePasswordLogin(username, password);
    res.json(result);
  }

  register(req: Request, res: Response) {
    // Handle registration
  }
}

export default new AuthController();
