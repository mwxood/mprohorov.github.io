import { configureStore } from '@reduxjs/toolkit'
import { infoSlice } from '../reducers/info'

const store = configureStore({
    reducer: {
        info: infoSlice.reducer
    }
})

export default store