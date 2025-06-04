'use client';
import { createSlice } from '@reduxjs/toolkit';

function loadCart() {
  if (typeof window !== 'undefined') {
    try {
      const data = localStorage.getItem('cart');
      if (data) return JSON.parse(data);
    } catch {}
  }
  return { items: [], totalCount: 0 };
}

const initialState = loadCart();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addToCart(state, action) {
  const product = action.payload;
  const qtyToAdd = product.qty || 1;
  const existing = state.items.find(item => item.id === product.id);
  if (existing) {
    existing.qty += qtyToAdd;
  } else {
    state.items.push({ ...product, qty: qtyToAdd });
  }
  state.totalCount += qtyToAdd;
},
    decreaseQty(state, action) {
      const id = action.payload;
      const existing = state.items.find(item => item.id === id);
      if (existing && existing.qty > 1) {
        existing.qty -= 1;
        state.totalCount -= 1;
      } else if (existing && existing.qty === 1) {
        state.items = state.items.filter(item => item.id !== id);
        state.totalCount -= 1;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existing = state.items.find(item => item.id === id);
      if (existing) {
        state.totalCount -= existing.qty;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
  },
});

export const { addToCart, decreaseQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;