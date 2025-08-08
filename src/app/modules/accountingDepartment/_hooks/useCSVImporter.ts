import { useRef } from "react";
import type { Invoice } from "../../../../features/accountingDepartment/invoices/invoices.models";
import { useInvoiceStore } from "../../../../store/invoices/invoices.store";
import { generateInvoiceNumber } from "../../../../utils/Invoices.utils";

export const useCSVImporter = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addInvoice } = useInvoiceStore();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const rows = text
        .split("\n")
        .map((row) => row.trim())
        .filter(Boolean);

      const headers = rows[0].split(",").map((h) => h.trim());
      const invoices: Invoice[] = [];

      for (let i = 1; i < rows.length; i++) {
        const values = rows[i].split(",").map((v) => v.trim());
        if (values.length !== headers.length) continue;

        const invoice: Partial<Invoice> = {};

        for (let j = 0; j < headers.length; j++) {
          const key = headers[j];
          const value = values[j];

          switch (key) {
            case "invoiceNumber":
              invoice.invoiceNumber = value;
              break;
            case "clientName":
              invoice.clientName = value;
              break;
            case "date":
              invoice.date = new Date(value);
              break;
            case "amount":
              invoice.amount = parseFloat(value);
              break;
            case "status":
              invoice.status =
                value.toUpperCase() === "PAID"
                  ? "PAID"
                  : value.toUpperCase() === "UNPAID"
                  ? "UNPAID"
                  : "";
              break;
            default:
              break;
          }
        }

        if (invoice.clientName && invoice.date && invoice.amount) {
          invoices.push({
            ...invoice,
            id: crypto.randomUUID(),
            invoiceNumber: invoice.invoiceNumber || generateInvoiceNumber(),
          } as Invoice);
        }
      }

      invoices.forEach((inv) => addInvoice(inv));

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };

    reader.readAsText(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return { fileInputRef, handleFileUpload, triggerFileInput };
};
