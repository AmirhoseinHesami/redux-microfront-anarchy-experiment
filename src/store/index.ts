import {
  configureStore,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

export interface BasketItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const basketSlice = createSlice({
  name: "basket",
  initialState: [] as BasketItem[],
  reducers: {
    addItem: (state, action: PayloadAction<BasketItem>) => {
      const exists = state.find((i) => i.id === action.payload.id);
      if (!exists) state.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      return state.filter((i) => i.id !== action.payload);
    },
    increment: (state, action: PayloadAction<string>) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrement: (state, action: PayloadAction<string>) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          return state.filter((i) => i.id !== action.payload);
        }
      }
    },
    clear: () => [],
  },
});

export const { addItem, removeItem, increment, decrement, clear } =
  basketSlice.actions;

export const store = configureStore({
  reducer: { basket: basketSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
