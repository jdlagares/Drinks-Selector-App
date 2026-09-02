import {create} from  "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, type RecipeSliceType } from "./recipeSlice"

export const useAppStore=create<RecipeSliceType>()(devtools((...a)=>({
    ...createRecipesSlice(...a)
})))