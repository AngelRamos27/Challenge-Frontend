import InvoiceCellAmountTable from "../app/modules/accountingDepartment/_components/invoice-table/invoice.cell.amount.table";
import InvoiceCellDateTable from "../app/modules/accountingDepartment/_components/invoice-table/invoice.cell.date.table";
import InvoiceCellTable from "../app/modules/accountingDepartment/_components/invoice-table/invoice.cell.table";
import UserCellIcon from "../components/ui/user-profile-icon";
import type { Invoice } from "../features/accountingDepartment/invoices/invoices.models";
import { type ColDef } from "ag-grid-community";
export const mockInvoices: Invoice[] = [
  {
    id: " 1",
    invoiceNumber: "INV-001",
    clientName: "John Doe",
    date: new Date(2025, 7, 1),
    status: "PAID",
    amount: 1200,
  },
  {
    id: "2",
    invoiceNumber: "INV-002",
    clientName: "Jane Smith",
    date: new Date(2025, 8, 3),
    status: "UNPAID",
    amount: 850,
  },
  {
    id: "3",
    invoiceNumber: "INV-003",
    clientName: "Alice Johnson",
    date: new Date(2025, 8, 5),
    status: "PAID",
    amount: 540,
  },
];

export const generateInvoiceNumber = (): string => {
  const prefix = "INV";
  const randomPart = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${randomPart}`;
};

const headerClassStyle = "bg-gray-200 font-semibold";
const cellClassStyle = "hover:bg-gray-200";
export const colDefs: ColDef<Invoice>[] = [
  {
    field: "invoiceNumber",
    headerName: "Invoice Number",
    minWidth: 150,
    headerClass: headerClassStyle,
    cellClass: cellClassStyle,
    filter: true,
    flex: 1,
    cellRenderer: InvoiceCellTable,
  },
  {
    field: "clientName",
    headerName: "Client Name",
    minWidth: 150,
    headerClass: headerClassStyle,
    cellClass: cellClassStyle,
    filter: true,
    flex: 1,
    cellRenderer: UserCellIcon,
  },
  {
    field: "date",
    headerName: "Date",
    minWidth: 150,
    headerClass: headerClassStyle,
    cellClass: cellClassStyle,
    filter: true,
    cellRenderer: InvoiceCellDateTable,
  },
  {
    field: "status",
    headerName: "Status",
    headerClass: headerClassStyle,
    minWidth: 150,
    filter: true,
    cellRenderer: InvoiceCellTable,
    comparator: (a, b) => (a === "PAID" ? 1 : 0) - (b === "PAID" ? 1 : 0),
    cellClass: (params) =>
      params.value === "PAID"
        ? "hover:bg-green-500 hover:opacity-80 transition duration-200 "
        : "hover:bg-red-500 duration-200 transition hover:opacity-80",
  },
  {
    field: "amount",
    headerName: "Amount (USD)",
    headerClass: headerClassStyle,
    cellClass: cellClassStyle,
    minWidth: 150,
    filter: true,
    cellRenderer: InvoiceCellAmountTable,

    comparator: (a, b) => a - b,
  },
];

export const invoiceSchema = {
  type: "Invoices",
  fields: [
    { label: "Invoice Number", key: "invoiceNumber", type: "string" },
    { label: "Client Name", key: "clientName", type: "string" },
    { label: "Date", key: "date", type: "date" },
    { label: "Status", key: "status", type: "string" },
    { label: "Amount", key: "amount", type: "number" },
  ],
};
