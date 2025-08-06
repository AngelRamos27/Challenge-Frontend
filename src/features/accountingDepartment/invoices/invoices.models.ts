import type { InferType } from "yup";
import type {
  createInvoiceSchema,
  updateInvoiceSchema,
} from "./invoices.schemas";

export interface Invoice {
  invoiceNumber?: string;
  clientName: string;
  date: Date;
  amount: number;
  status: boolean;
}

export type CreateInvoicePayload = InferType<typeof createInvoiceSchema>;
export type UpdateInvoicePayload = InferType<typeof updateInvoiceSchema>;
