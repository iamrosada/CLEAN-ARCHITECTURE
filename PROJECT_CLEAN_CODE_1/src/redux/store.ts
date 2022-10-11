import { Person } from "@/model";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice, peopleSlice } from "@/redux/state";


export interface AppStore {
  people: Person[];
  favorites: Person[];
}

export default configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer,
  }
})