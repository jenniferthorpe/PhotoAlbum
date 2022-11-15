import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    userName: null,
    albumName: null,
    favorites: []
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload.id
    },
    setUserName: (state, action) => {
      state.userName = action.payload.name
    },
    setAlbumName: (state, action) => {
      state.albumName = action.payload
    },
    saveFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload.id]
    },
    removeFavorites: (state, action) => {
      const newArr = state.favorites.filter(e => e !== action.payload.id);
      state.favorites = newArr;
    }
  }
});

export const { setUserId, setUserName, setAlbumName, saveFavorites, removeFavorites } = userSlice.actions

export default userSlice.reducer
