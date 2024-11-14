import { StateCreator } from 'zustand'

import { TUser } from '@/app/types/user'

export type TUserSlice = {
  users: TUser[]
  addUser: (user: TUser) => void
  fetchUser: () => Promise<void>
}

const createUserSlice: StateCreator<TUserSlice, [], [], TUserSlice> = (set) => ({
  users: [],
  addUser: (user) => {
    set((state) => ({
      users: [...state.users, user]
    }))
  },
  fetchUser: async () => {}
})

export { createUserSlice }
