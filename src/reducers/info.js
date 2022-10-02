import { createSlice } from '@reduxjs/toolkit'

export const infoSlice = createSlice({
    name: 'info',
    initialState: {items: []},
    reducers: {
        addInfo: (state, action) => {
            return {items: [...state.items, action.payload]}
        }
    }
})

export const infoAction = infoSlice.actions