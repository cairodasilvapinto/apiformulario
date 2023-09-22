import { Router } from "express";

import { profilesRoutes } from "./profiles.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/profiles", profilesRoutes);

export { router };
