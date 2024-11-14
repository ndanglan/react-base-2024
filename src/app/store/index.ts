import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { createTodoSlice, TTodoSlice } from '@/app/store/todos'
import { createUserSlice, TUserSlice } from '@/app/store/user'

type TBoundSlice = TTodoSlice & TUserSlice

const useBoundStore = create<TBoundSlice>()(
  devtools((...a) => ({
    ...createTodoSlice(...a),
    ...createUserSlice(...a)
  }))
)

export default useBoundStore
