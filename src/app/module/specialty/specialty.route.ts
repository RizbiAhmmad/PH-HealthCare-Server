import { Router } from "express";
import { SpecialtyCntroller } from "./specialty.controller";

const router = Router();

router.post("/", SpecialtyCntroller.createSpecialty);
router.get("/", SpecialtyCntroller.getAllSpecialties);
router.delete("/:id", SpecialtyCntroller.deleteSpecialties);

export const SpecialtyRouter = router;
