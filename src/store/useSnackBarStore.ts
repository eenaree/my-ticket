import create from 'zustand';

interface SnackBarState {
  message: { message: string } | null;
  openSnackBar(message: string): void;
  clearSnackBar(): void;
}

export const useSnackBarStore = create<SnackBarState>()(set => ({
  message: null,
  openSnackBar(message) {
    set({ message: { message } });
  },
  clearSnackBar() {
    set({ message: null });
  },
}));
