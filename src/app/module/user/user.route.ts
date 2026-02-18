import { UserController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { Router } from "express";
import { createDoctorZodSchema } from "./user.validation";

const router = Router();

router.post(
  "/create-doctor",
  //       (req: Request, res: Response, next: NextFunction) => {
  //          const parsedResult = createDoctorZodSchema.safeParse(req.body);

  //         if (!parsedResult.success) {
  //             next(parsedResult.error)
  //         }

  //     //sanitizing the data
  //         req.body = parsedResult.data;

  //         next()
  // },

  validateRequest(createDoctorZodSchema),
  UserController.createDoctor,
);

export const userRoutes = router;
