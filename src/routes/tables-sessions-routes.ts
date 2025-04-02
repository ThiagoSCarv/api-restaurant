import { Router } from "express";
import { TablesSessionsController } from "@/controllers/tables-sessions-controller";

const tableSessionsRoutes = Router();
const tablesSessionsController = new TablesSessionsController();

tableSessionsRoutes.post("/", tablesSessionsController.create);
tableSessionsRoutes.get("/", tablesSessionsController.index)
tableSessionsRoutes.patch("/:id", tablesSessionsController.update)

export { tableSessionsRoutes };
