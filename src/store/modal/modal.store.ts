import { create } from "zustand";

interface ModalStore {
  isInvoiceModalOpen: boolean;
  openInvoiceModal: () => void;
  closeInvoiceModal: () => void;
}

export const useInvoiceModalStore = create<ModalStore>((set) => ({
  isInvoiceModalOpen: false,
  openInvoiceModal: () => set({ isInvoiceModalOpen: true }),
  closeInvoiceModal: () => set({ isInvoiceModalOpen: false }),
}));
