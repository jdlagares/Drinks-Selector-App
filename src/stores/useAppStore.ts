import {create} from  "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, type RecipeSliceType } from "./recipeSlice"
import { createFavoriteSlice,type favoriteSliceType } from "./favoriteSlice"
import { createNotificationSlice , type notificationSliceType} from "./notificationSlice"

export const useAppStore=create<RecipeSliceType & favoriteSliceType & notificationSliceType>()(devtools((...a)=>({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
})))