import  type { StateCreator } from "zustand"
import type { Recipe } from "../types"
import { createRecipesSlice, type RecipeSliceType } from "./recipeSlice"

export type favoriteSliceType ={
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe)=>void
    CheckIfExistInfavorite:(id : Recipe["idDrink"])=>boolean
    loadFromStorage: ()=>void
}

export const createFavoriteSlice :StateCreator<favoriteSliceType & RecipeSliceType,[],[],favoriteSliceType>= (set,get,api) =>({
    favorites:[],
    handleClickFavorite:(recipe)=>{
        if(get().CheckIfExistInfavorite(recipe.idDrink)){
            set((state)=>({
                favorites: state.favorites.filter(favorite=>favorite.idDrink!==recipe.idDrink)
            }))
        }else{
            set((state)=>({
                favorites: [...state.favorites,recipe]
            }))
        }
        createRecipesSlice(set,get,api).closeModal()
        localStorage.setItem("favorites",JSON.stringify(get().favorites))
    },
    CheckIfExistInfavorite:(id)=>{
        return get().favorites.some(favorite=>favorite.idDrink===id)
    },
    loadFromStorage: ()=>{
        const storedFavorites=localStorage.getItem("favorites")
        if(storedFavorites){
            set({
                favorites:JSON.parse(storedFavorites)
            })
        }
    }
})