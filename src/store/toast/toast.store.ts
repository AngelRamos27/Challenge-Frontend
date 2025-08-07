import { create } from "zustand";

interface ToastState {
  message: string;
  type: "success" | "error" | "";
  isVisible: boolean;
  showToast: (message: string, type: "success" | "error") => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  message: "",
  type: "",
  isVisible: false,
  showToast: (message, type) => {
    set({ message, type, isVisible: true });
  },
  hideToast: () => {
    set({ message: "", type: "", isVisible: false });
  },
}));
