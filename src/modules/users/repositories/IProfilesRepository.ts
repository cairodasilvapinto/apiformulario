import { Profile } from "../entities/Profile";

interface ICreateProfileDTO {
    name: string;
    description: string;
}

interface IProfilesRepository {
    findByName(name: string): Promise<Profile>;
    create({ name, description }: ICreateProfileDTO): Promise<void>;
    list(): Promise<Profile[]>;
}

export { IProfilesRepository, ICreateProfileDTO };
