import { Router } from "express";

import { tableSessionsRoutes } from "./tables-sessions-routes";
import { productsRoutes } from "./products-routes";
import { tableRoutes } from "./tables-routes";

const routes = Router();
routes.use("/products", productsRoutes);
routes.use("/tables", tableRoutes)
routes.use("/tables-sessions", tableSessionsRoutes)

export { routes };
