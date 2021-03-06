import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload)

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
        state.items = newBasket;
      } else {
        console.warn(`Cant remove item(id ${action.payload.id}) because it is not in the basket`)
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;


export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
