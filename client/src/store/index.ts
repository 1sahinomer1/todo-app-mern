import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
  }, //oluşturulan slicelardan gelen reducerler girilecek
});

export default store;

export type RootState = ReturnType<typeof store.getState>; //gelen statedeki tipleri otomatik belirliyor
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); //dispatchlere tip yazmamak icin bunu yazdik
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//const state = useSelector((state:Appstate)) demek yerine ^^
