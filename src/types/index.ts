import {z} from "zod"
import { CategoriesApiResponseSchema, DrinksAPIResponse, SearchFilterSchema } from "../utils/recipes-schema"

export type Categories=z.infer<typeof CategoriesApiResponseSchema>
export type SearchFilter=z.infer<typeof SearchFilterSchema>
export type Drinks=z.infer<typeof DrinksAPIResponse>