import { AgGridReact } from "ag-grid-react";
import {
  ModuleRegistry,
  AllCommunityModule,
  type ValueFormatterParams,
  type ColDef,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import type { Invoice } from "../../../../features/accountingDepartment/invoices/invoices.models";
import { useInvoiceFilters } from "../_hooks/useInvoiceFilters";
import TitleLabel from "../../../../components/ui/title-label";
import InvoiceFilters from "./invoice.filters";

ModuleRegistry.registerModules([AllCommunityModule]);
const headerClassStyle = "bg-gray-200 font-semibold";
const cellClassStyle = "hover:bg-gray-200";
const colDefs: ColDef<Invoice>[] = [
  {
    field: "invoiceNumber",
    headerName: "Invoice Number",
    headerClass: headerClassStyle,
    cellClass: cellClassStyle,
    filter: true,
    flex: 1,
  },
  {
    field: "clientName",
    headerName: "Client Name",
    headerClass: headerClassStyle,
    cellClass: cellClassStyle,
    filter: true,
    flex: 1,
  },
  {
    field: "date",
    headerName: "Date",
    headerClass: headerClassStyle,
    cellClass: cellClassStyle,
    filter: true,
    valueFormatter: (params: ValueFormatterParams<Invoice>) => {
      const date =
        params.value instanceof Date ? params.value : new Date(params.value);
      return date.toLocaleDateString();
    },
  },
  {
    field: "status",
    headerName: "Status",
    headerClass: headerClassStyle,
    filter: true,
    comparator: (a, b) => (a === "PAID" ? 1 : 0) - (b === "PAID" ? 1 : 0),
    cellClass: (params) =>
      params.value === "PAID"
        ? "text-green-600 font-semibold hover:bg-gray-200"
        : "text-red-500 font-semibold hover:bg-gray-200",
  },
  {
    field: "amount",
    headerName: "Amount (USD)",
    headerClass: headerClassStyle,
    cellClass: cellClassStyle,
    filter: true,
    valueFormatter: (params: ValueFormatterParams<Invoice>) =>
      `$${params.value.toFixed(2)}`,
    comparator: (a, b) => a - b,
  },
];

const InvoicesTable = () => {
  const { filteredData } = useInvoiceFilters();
  return (
    <div className="ag-theme-quartz h-screen w-full flex flex-col gap-2">
      <TitleLabel size="text-xl md:text-3xl pb-4" text="Invoices table" />
      <div className="w-full h-screen flex flex-col gap-4">
        <InvoiceFilters />
        <AgGridReact
          rowData={filteredData}
          columnDefs={colDefs}
          pagination
          paginationPageSize={20}
          rowHeight={40}
          getRowId={(params) => params.data?.id?.toString() ?? ""}
          modules={[AllCommunityModule]}
        />
      </div>
    </div>
  );
};

export default InvoicesTable;
