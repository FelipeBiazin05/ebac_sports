import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type carrinhoReducer = {
  itens: Produto[]
}

const initialState: carrinhoReducer = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload

      if (state.itens.find((p) => p.id === item.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(item)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
