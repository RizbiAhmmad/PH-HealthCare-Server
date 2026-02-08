/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await SpecialtyService.createSpecialty(payload);

    res.status(201).json({
      success: true,
      message: "Specialty Created Successfully",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Specialty Creation Failed",
      error: error.message,
    });
  }
};

const getAllSpecialties = async (req: Request, res: Response) => {
  try {
    const Specialty = await SpecialtyService.getAllSpecialties();

    res.status(201).json({
      success: true,
      message: "Specialty Retrieved Successfully",
      data: Specialty,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Specialty Creation Failed",
      error: error.message,
    });
  }
};

const deleteSpecialties = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await SpecialtyService.deleteSpecialties(id as string);

    res.status(200).json({
      success: true,
      message: "Specialty Deleted Successfully",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Specialty Creation Failed",
      error: error.message,
    });
  }
};

export const SpecialtyCntroller = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialties
};
