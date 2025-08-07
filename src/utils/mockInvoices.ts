import type { Invoice } from "../features/accountingDepartment/invoices/invoices.models";

export const mockInvoices: Invoice[] = [
  {
    id: " 1",
    invoiceNumber: "INV-001",
    clientName: "John Doe",
    date: new Date("2025-08-01"),
    status: "PAID",
    amount: 1200,
  },
  {
    id: "2",
    invoiceNumber: "INV-002",
    clientName: "Jane Smith",
    date: new Date("2025-08-03"),
    status: "UNPAID",
    amount: 850,
  },
  {
    id: "3",
    invoiceNumber: "INV-003",
    clientName: "Alice Johnson",
    date: new Date("2025-08-05"),
    status: "PAID",
    amount: 540,
  },
];
