import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface Drawer {
  open: boolean
  content: any
}
interface MainState {
  value: number
  drawer: Drawer
}

// Define the initial state using that type
const initialState: MainState = {
  value: 0,
  drawer: {
    open: false,
    content: null,
  },
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setDrawerContent: (state, action: PayloadAction<any>) => {
      state.drawer.content = action.payload
    },
    openDrawer: (state, action: PayloadAction<boolean>) => {
      state.drawer.open = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const mainActions = mainSlice.actions

export const mainReducer = mainSlice.reducer
