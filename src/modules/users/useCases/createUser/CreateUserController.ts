import { Request, Response } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, cpf } = request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        createUserUseCase.execute({ name, email, cpf });
        return response.status(201).send();
    }
}

export { CreateUserController };
