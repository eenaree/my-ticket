import create from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@typings/db';

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    set => ({
      user: null,
      setUser: user => set({ user }),
    }),
    {
      name: 'user-storage',
      getStorage: () => sessionStorage,
    }
  )
);
