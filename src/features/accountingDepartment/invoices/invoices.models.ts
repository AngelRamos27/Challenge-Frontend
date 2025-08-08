
export interface Invoice {
  id?: string;
  invoiceNumber?: string;
  clientName: string;
  date: Date | "";
  amount: number | "";
  status: InvoiceStatus | "";
}

export type InvoiceStatus = "PAID" | "UNPAID";
export type InvoiceStatusFilter = "ALL" | InvoiceStatus;


