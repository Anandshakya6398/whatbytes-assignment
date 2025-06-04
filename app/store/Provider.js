'use client';
import { Provider } from 'react-redux';
import { store } from './store';
import { useEffect } from 'react';

export default function ReduxProvider({ children }) {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState().cart;
      localStorage.setItem('cart', JSON.stringify(state));
    });
    return unsubscribe;
  }, []);
  return <Provider store={store}>{children}</Provider>;
}