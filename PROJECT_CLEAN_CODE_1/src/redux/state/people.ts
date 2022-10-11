import { Person } from "@/model";
import { setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = []

export const peopleSlice = createSlice({
  name: localStorage.PEOPLE,

  initialState: localStorage.getItem(localStorage.PEOPLE) ? JSON.parse(localStorage.getItem(localStorage.PEOPLE) as string) : initialState,

  reducers: {
    addPeople: (state, actions) => {
      setLocalStorage(localStorage.PEOPLE, state);
      return actions.payload
    },
  }

})
export const { addPeople } = peopleSlice.actions