import { create } from "zustand";
import type { Invoice, InvoiceStatusFilter } from "./invoices.models";
import { mockInvoices } from "../../../utils/mockInvoices";

interface InvoiceState {
  rowData: Invoice[];
  statusFilter: InvoiceStatusFilter;
  dateFrom: string;
  dateTo: string;
  setStatusFilter: (status: InvoiceStatusFilter) => void;
  setDateFrom: (date: string) => void;
  setDateTo: (date: string) => void;
}

export const useInvoiceStore = create<InvoiceState>((set) => ({
  rowData: mockInvoices,
  statusFilter: "ALL",
  dateFrom: "",
  dateTo: "",
  setStatusFilter: (status) => set({ statusFilter: status }),
  setDateFrom: (date) => set({ dateFrom: date }),
  setDateTo: (date) => set({ dateTo: date }),
}));
