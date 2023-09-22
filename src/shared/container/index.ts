// eslint-disable-next-line import/no-extraneous-dependencies
import { container } from "tsyringe";

import { ProfilesRepository } from "../../modules/users/repositories/implementations/ProfilesRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IProfilesRepository } from "../../modules/users/repositories/IProfilesRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

container.registerSingleton<IProfilesRepository>(
    "ProfilesRepository",
    ProfilesRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);
