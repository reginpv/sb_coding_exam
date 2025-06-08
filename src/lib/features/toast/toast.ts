import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/lib/store"

type Toast = {
  id: string
  message: string
  expiresAt: string
}

const initialState: Toast[] = []

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<Toast>) => {
      state.push(action.payload)
    },
    deleteToast: (state, action: PayloadAction<string>) => {
      return state.filter(toast => toast.id !== action.payload)
    },
  },
})


export const { addToast, deleteToast  } = toastSlice.actions
export const selectToasts = (state: RootState) => state.toast

export default toastSlice.reducer