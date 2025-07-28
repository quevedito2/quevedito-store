// src/constants/routes.ts
import { ProductCategory } from "../types/product";

export const ROUTES = {
  home: "/",
  tools: `/${ProductCategory.Tools}`,
  accessories: `/${ProductCategory.Accessories}`,
  productDetail: "/product/:id",
};
