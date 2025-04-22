import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritosType = {
  itens: Produto[]
}

const initialState: favoritosType = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload

      if (state.itens.find((p) => p.id === item.id)) {
        state.itens = state.itens.filter((p) => p.id !== item.id)
      } else {
        state.itens.push(item)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
