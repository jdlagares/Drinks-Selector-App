import {z} from "zod"
import { CategoriesApiResponseSchema } from "../utils/recipes-schema"

export type Categories=z.infer<typeof CategoriesApiResponseSchema>