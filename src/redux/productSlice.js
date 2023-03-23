import { createSlice, nanoid } from '@reduxjs/toolkit';

const productsInitialState = [
  { id: 0, text: 'SmartScreen', completed: true },
  { id: 1, text: 'Refrigerator', completed: true },
  { id: 2, text: 'Oven', completed: false },
  { id: 3, text: 'Smartphone', completed: false },
  { id: 4, text: 'Laptop', completed: false },
];

const productsSlice = createSlice({
  name: 'Products',
  initialState: productsInitialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteProduct(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addProduct, deleteProduct, toggleCompleted } =
  productsSlice.actions;
export const productReducer = productsSlice.reducer;
