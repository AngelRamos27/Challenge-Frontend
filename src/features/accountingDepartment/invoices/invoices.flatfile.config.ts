import type { Flatfile } from "@flatfile/sdk";


export const invoiceSheet: Flatfile.SheetConfig = {
  name: "Invoices",
  fields: [
    { label: "Invoice Number", key: "invoiceNumber", type: "string" },
    { label: "Client Name", key: "clientName", type: "string" },
    { label: "Date", key: "date", type: "date" },
    { label: "Status", key: "status", type: "string" },
    { label: "Amount", key: "amount", type: "number" },
  ],
};
