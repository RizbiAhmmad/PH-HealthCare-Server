import { Router } from "express";
import { AuthRoutes } from "../module/auth/auth.router";
import { userRoutes } from "../module/user/user.route";
import { doctorRoutes } from "../module/doctor/doctor.route";
import { SpecialtyRoutes } from "../module/specialty/specialty.route";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/specialties", SpecialtyRoutes);
router.use("/users", userRoutes);
router.use("/doctors", doctorRoutes);

export const IndexRoutes = router;
