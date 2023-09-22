// eslint-disable-next-line import/no-extraneous-dependencies
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string;
    email: string;
    cpf: string;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ name, email, cpf }: IRequest): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("User Already Exists !");
        }
        this.usersRepository.create({ name, email, cpf });
    }
}

export { CreateUserUseCase };
