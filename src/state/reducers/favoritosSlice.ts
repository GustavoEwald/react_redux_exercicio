import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

interface favoritosState {
  favs: Produto[]
}

const initialState: favoritosState = {
  favs: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.favs.find((p) => p.id === produto.id)) {
        state.favs = state.favs.filter((p) => p.id != produto.id)
      } else {
        state.favs.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
