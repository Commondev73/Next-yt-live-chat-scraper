import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { YouTubeChatMessageInterface } from '@/interfaces/youtube.interface';
import { uniqWith, isEqual } from 'lodash'
import { YOUTUBE_LIVE_CHAT_MAXIMUM_MESSAGE } from '@/constants/youtube.constants';

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
        resetMessages: () => {
            return initialState
        },
        setMessages: (state, action: PayloadAction<YoutubeState>) => {
            let messages: YouTubeChatMessageInterface[] = []
            messages = uniqWith([...state.messages, ...action.payload.messages], isEqual)

            const messagesLength = messages.length

            if (messagesLength > YOUTUBE_LIVE_CHAT_MAXIMUM_MESSAGE) {
                const removeMessage = Number(messagesLength - YOUTUBE_LIVE_CHAT_MAXIMUM_MESSAGE)
                messages = messages.slice(removeMessage)
            }

            return {
                messages
            }
        }
    }
})

export const { resetMessages, setMessages } = youtubeSlice.actions