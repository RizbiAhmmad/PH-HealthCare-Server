import { Router } from "express";
import { AuthRoutes } from "../module/auth/auth.router";
import { userRoutes } from "../module/user/user.route";

import { SpecialtyRoutes } from "../module/specialty/specialty.route";
import { DoctorRoutes } from "../module/doctor/doctor.route";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/specialties", SpecialtyRoutes);
router.use("/users", userRoutes);
router.use("/doctors", DoctorRoutes);

export const IndexRoutes = router;
