import { create } from "zustand";
import { mockInvoices } from "../../utils/mockInvoices";
import type {
  Invoice,
  InvoiceStatusFilter,
} from "../../features/accountingDepartment/invoices/invoices.models";

interface InvoiceState {
  rowData: Invoice[];
  statusFilter: InvoiceStatusFilter;
  dateFrom: string;
  dateTo: string;
  setStatusFilter: (status: InvoiceStatusFilter) => void;
  setDateFrom: (date: string) => void;
  setDateTo: (date: string) => void;
  addInvoice: (invoice: Invoice) => void;
}

interface InvoiceFormState {
  invoice: Invoice;
  setInvoice: (invoice: Invoice) => void;
  resetInvoice: () => void;
}

export const useInvoiceStore = create<InvoiceState>((set) => ({ //global state to manage Invoices and filters
  rowData: mockInvoices,
  statusFilter: "ALL",
  dateFrom: "",
  dateTo: "",
  setStatusFilter: (status) => set({ statusFilter: status }),
  setDateFrom: (date) => set({ dateFrom: date }),
  setDateTo: (date) => set({ dateTo: date }),
  addInvoice: (invoice) =>
    set((state) => ({
      rowData: [...state.rowData, invoice],
    })),
}));

export const useInvoiceFormStore = create<InvoiceFormState>((set) => ({ //global state to manage creations of new Invoices
  invoice: {
    clientName: "",
    date: new Date(""),
    amount: 0,
    status: "",
  },
  setInvoice: (invoice) => set({ invoice }),
  resetInvoice: () =>
    set({
      invoice: {
        clientName: "",
        date: new Date(""),
        amount: 0,
        status: "",
      },
    }),
}));



