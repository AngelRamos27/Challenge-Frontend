import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useInvoiceFilters } from "../../_hooks/useInvoiceFilters";
import TitleLabel from "../../../../../components/ui/title-label";
import InvoiceFilters from "../invoice.filters";
import { colDefs } from "../../../../../utils/Invoices.utils";
import CSVImporter from "../csv.importer";

ModuleRegistry.registerModules([AllCommunityModule]);

const InvoicesTable = () => {
  const { filteredData } = useInvoiceFilters();
  return (
    <div className="ag-theme-quartz h-screen w-full flex flex-col gap-2">
      <TitleLabel size="text-xl md:text-3xl text-center pb-4" text="Invoices table" />
      <div className="w-full h-screen flex flex-col gap-4">
        <InvoiceFilters />
        <CSVImporter />
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
