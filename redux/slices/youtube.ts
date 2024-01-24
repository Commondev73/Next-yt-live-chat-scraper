import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { YouTubeChatMessageInterface } from '@/interfaces/youtube.interface';
import { union } from 'lodash'

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
            return {
                messages: union(state.messages, action.payload.messages)
            }
        }
    }
})

export const { setMessages } = youtubeSlice.actions