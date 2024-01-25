import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { YouTubeChatMessageInterface } from '@/interfaces/youtube.interface';
import { uniqWith, isEqual } from 'lodash'

export interface YoutubeState {
    messages: YouTubeChatMessageInterface[]
}

const initialState: YoutubeState = {
    messages: []
}

export const youtubeSlice = createSlice({
    name: "youtube",
    initialState,
    reducers: {
        setMessages: (state, action: PayloadAction<YoutubeState>) => {
            state.messages = uniqWith([...state.messages, ...action.payload.messages], isEqual)
        }
    }
})

export const { setMessages } = youtubeSlice.actions