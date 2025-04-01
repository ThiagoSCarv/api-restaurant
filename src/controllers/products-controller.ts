import { NextFunction, Request, Response } from "express";
import { knex } from "@/database/knex";
import { AppError } from "@/utils/AppError";
import { string, z } from "zod";

class ProductController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const products = await knex<ProductRepository>("products").select()

      return response.json({ message: "OK" });
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string({ required_error: "name is required!" }).trim().min(6),
        price: z.number().gt(0, { message: "value must to be greater than 0" }),
      });

      const { name, price } = bodySchema.parse(request.body);

      await knex<ProductRepository>("products").insert({ name, price });

      return response.status(201).json();
    } catch (error) {
      next(error);
    }
  }
}

export { ProductController };
