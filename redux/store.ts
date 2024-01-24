import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { youtubeSlice, YoutubeState } from '@/redux/slices/youtube'

type AppType = {
    [youtubeSlice.name]: YoutubeState;
};

const reducer = combineReducers({
    [youtubeSlice.name]: youtubeSlice.reducer
})

export const store = configureStore({
    reducer
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
