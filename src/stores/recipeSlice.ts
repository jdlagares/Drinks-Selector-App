import type { StateCreator } from "zustand"
import { GetCategories } from "../services/RecipeServices"
import type { Categories } from "../types"

export type RecipeSliceType={
    categories:Categories
    fetchCategories:()=> Promise<void>
}

export const createRecipesSlice:StateCreator<RecipeSliceType>=(set)=>({
    categories:{
        drinks:[]
    },
    fetchCategories:async()=>{
        const categories= await GetCategories()
        set({
            categories
        })
    }
})