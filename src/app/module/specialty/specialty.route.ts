import { Router } from "express";
import { SpecialtyCntroller } from "./specialty.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.post("/", SpecialtyCntroller.createSpecialty);
router.get("/", SpecialtyCntroller.getAllSpecialties);
router.delete("/:id",checkAuth( Role.PATIENT), SpecialtyCntroller.deleteSpecialties);

export const SpecialtyRouter = router;
