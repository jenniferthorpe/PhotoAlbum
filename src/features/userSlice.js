import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    userName: null,
    albumName: null
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload.id
    },
    setUserName: (state, action) => {
      state.userName = action.payload.name
    },
    setAlbumName: (state, action) => {
      console.log('action', action)
      state.albumName = action.payload
    }
  }
});

export const { setUserId, setUserName, setAlbumName } = userSlice.actions

export default userSlice.reducer
