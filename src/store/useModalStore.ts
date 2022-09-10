import create from 'zustand';

interface ModalState {
  modal: string;
  openModal(modalName: string): void;
  closeModal(): void;
}
export const useModalStore = create<ModalState>()(set => ({
  modal: '',
  openModal: modalName => set({ modal: modalName }),
  closeModal: () => set({ modal: '' }),
}));
