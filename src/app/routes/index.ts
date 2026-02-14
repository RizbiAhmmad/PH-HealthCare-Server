import { Router } from "express";
import { SpecialtyRouter } from "../module/specialty/specialty.route";
import { AuthRoutes } from "../module/auth/auth.router";
import { userRoutes } from "../module/user/user.route";
import { doctorRoutes } from "../module/doctor/doctor.route";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/specialties", SpecialtyRouter);
router.use("/users", userRoutes);
router.use("/doctors", doctorRoutes);

export const IndexRoutes = router;
