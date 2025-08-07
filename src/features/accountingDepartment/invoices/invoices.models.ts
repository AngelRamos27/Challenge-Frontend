import type { InferType } from "yup";
import type {
  createInvoiceSchema,
  updateInvoiceSchema,
} from "./invoices.schemas";

export interface Invoice {
  id?: string;
  invoiceNumber?: string;
  clientName: string;
  date: Date;
  amount: number;
  status: InvoiceStatus | "";
}

export type InvoiceStatus = "PAID" | "UNPAID";
export type InvoiceStatusFilter = "ALL" | InvoiceStatus;

export type CreateInvoicePayload = InferType<typeof createInvoiceSchema>;
export type UpdateInvoicePayload = InferType<typeof updateInvoiceSchema>;
