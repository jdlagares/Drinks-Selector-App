import {create} from  "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, type RecipeSliceType } from "./recipeSlice"
import { createFavoriteSlice,type favoriteSliceType } from "./favoriteSlice"

export const useAppStore=create<RecipeSliceType & favoriteSliceType>()(devtools((...a)=>({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a)
})))