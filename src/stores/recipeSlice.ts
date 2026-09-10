import type { StateCreator } from "zustand"
import { GetCategories, getRecipes } from "../services/RecipeServices"
import type { Categories, Drinks, SearchFilter } from "../types"

export type RecipeSliceType={
    categories:Categories
    drinks:Drinks
    fetchCategories:()=> Promise<void>
    searchRecipes:(searchFilters:SearchFilter)=>Promise<void>
}

export const createRecipesSlice:StateCreator<RecipeSliceType>=(set)=>({
    categories:{
        drinks:[]
    },
    drinks:{
        drinks:[]
    },
    fetchCategories:async()=>{
        const categories= await GetCategories()
        set({
            categories
        })
    },
    searchRecipes:async(filters)=>{
      const drinks= await getRecipes(filters)
      set({
        drinks
      })
    }
})