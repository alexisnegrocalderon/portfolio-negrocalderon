import { create } from 'zustand'

interface StoreState {
  mode: 'elegant' | 'wild'
  toggleMode: () => void
  selectedServices: string[]
  addService: (service: string) => void
  removeService: (service: string) => void
  totalPrice: number
  setTotalPrice: (price: number) => void
}

export const useStore = create<StoreState>((set) => ({
  mode: 'elegant',
  toggleMode: () =>
    set((state) => ({
      mode: state.mode === 'elegant' ? 'wild' : 'elegant',
    })),
  selectedServices: [],
  addService: (service: string) =>
    set((state) => ({
      selectedServices: [...state.selectedServices, service],
    })),
  removeService: (service: string) =>
    set((state) => ({
      selectedServices: state.selectedServices.filter((s) => s !== service),
    })),
  totalPrice: 0,
  setTotalPrice: (price: number) => set({ totalPrice: price }),
}))
