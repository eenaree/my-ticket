import create from 'zustand';
import { persist } from 'zustand/middleware';
import * as authService from '@services/auth';
import { User } from '@typings/db';

interface UserState {
  user: User | null;
  login(user: User): void;
  logout(): Promise<void>;
}

export const useUserStore = create<UserState>()(
  persist(
    set => ({
      user: null,
      login: user => set({ user }),
      logout: async () => {
        try {
          await authService.logout();
          set({ user: null });
        } catch (error) {
          window.alert('로그아웃 처리에 실패했습니다.');
          console.error(error);
        }
      },
    }),
    {
      name: 'user-storage',
      getStorage: () => sessionStorage,
    }
  )
);
