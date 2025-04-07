import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: UserAuth = {
  user: undefined,
  tokens: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserAuth, action: PayloadAction<UserAuth>) => {
      state.user = action.payload.user
      state.tokens = action.payload.tokens
    },
    clearUser: (state: UserAuth) => {
      state.user = undefined
      state.tokens = undefined
    }
  }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer