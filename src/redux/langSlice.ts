import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type langState ={
  lang: string,
}

const initialState = {} as langState;

export const langSlice = createSlice({
  name: 'language',
  initialState: initialState,
  reducers: {
    changeLang: (state , action: PayloadAction<langState>) => {
      state.lang = action.payload.lang;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeLang } = langSlice.actions

export default langSlice.reducer