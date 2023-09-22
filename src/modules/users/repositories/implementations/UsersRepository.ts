import { Repository } from "typeorm";

import { AppDataSource } from "../../../../../data-source";
import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    async create({ name, email, cpf }: ICreateUserDTO): Promise<void> {
        // const user = new User();
        const user = this.repository.create({
            name,
            email,
            cpf,
        });

        await this.repository.save(user);
    }

    async list(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOneBy({ email });
        return user;
    }
}

export { UsersRepository };
