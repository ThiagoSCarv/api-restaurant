import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { string, z } from "zod";

class ProductController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ message: "OK" });
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string({ required_error: "name is required!" }).trim().min(6),
        price: z.number().gt(0, { message: "value must to be greater than 0"})
      });

      const {name, price} = bodySchema.parse(request.body)

      return response.status(201).json({ name, price });
    } catch (error) {
      next(error);
    }
  }
}

export { ProductController };
