import { useInvoiceStore } from "../../../../store/invoices/invoices.store";
import type { InvoiceStatusFilter } from "../../../../features/accountingDepartment/invoices/invoices.models";
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
    <div className="w-full flex md:flex-row flex-col md:gap-2 items-end">
      <LabelInputItem text="Status" className="flex-1 ">
        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value as InvoiceStatusFilter)
          }
          className="border p-2 rounded h-[2.34rem]"
        >
          <option value="ALL">All</option>
          <option value="PAID">Paid</option>
          <option value="UNPAID">Unpaid</option>
        </select>
      </LabelInputItem>

      <LabelInputItem text="From" className="hidden md:block flex-1">
        <input
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          className="border w-full p-2 rounded"
        />
      </LabelInputItem>
      <LabelInputItem text="To" className="hidden md:block flex-1">
        <input
          type="date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          className="border w-full p-2 rounded"
        />
      </LabelInputItem>

      <div className="md:hidden w-full flex flex-row gap-2">
        <LabelInputItem text="From" className="flex-1">
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="border w-full p-2 rounded"
          />
        </LabelInputItem>
        <LabelInputItem text="To" className="flex-1">
          <input
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="border w-full p-2 rounded"
          />
        </LabelInputItem>
      </div>
    </div>
  );
};

export default InvoiceFilters;
