import type { InvoiceStatusFilter } from "../../../../features/accountingDepartment/invoices/invoices.models";
import { useInvoiceStore } from "../../../../features/accountingDepartment/invoices/invoices.store";
import LabelInputItem from "./label-input-item";

const InvoiceFilters = () => {
  const {
    statusFilter,
    setStatusFilter,
    dateFrom,
    setDateFrom,
    dateTo,
    setDateTo,
  } = useInvoiceStore();

  return (
    <div className="w-full flex md:flex-row flex-col md:gap-2 ">
      <LabelInputItem text="Status">
        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value as InvoiceStatusFilter)
          }
          className="border p-2 rounded"
        >
          <option value="ALL">All</option>
          <option value="PAID">Paid</option>
          <option value="UNPAID">Unpaid</option>
        </select>
      </LabelInputItem>

      <LabelInputItem text="From">
        <input
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          className="border p-2 rounded"
        />
      </LabelInputItem>
      <LabelInputItem text="To">
        <input
          type="date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          className="border p-2 rounded"
        />
      </LabelInputItem>
    </div>
  );
};

export default InvoiceFilters;
