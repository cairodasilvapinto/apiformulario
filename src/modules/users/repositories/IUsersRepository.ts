import { User } from "../entities/User";

interface ICreateUserDTO {
    name: string;
    email: string;
    cpf: string;
}

interface IUsersRepository {
    findByEmail(name: string): Promise<User>;
    list(): Promise<User[]>;
    create({ name, email, cpf }: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository, ICreateUserDTO };
