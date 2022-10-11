import { Person } from "@/models";
import { setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";


const initialState: Person[] = []

export const favoritesSlice = createSlice({
  name: 'favorites',

  initialState: localStorage.getItem(localStorage.FAVORITES) ? JSON.parse(localStorage.getItem(localStorage.FAVORITES) as string) : initialState,

  reducers: {
    addFavorite: (state, actions) => {
      setLocalStorage(localStorage.FAVORITES, state);
      return actions.payload
    }
  }
})

export const { addFavorite } = favoritesSlice.actions