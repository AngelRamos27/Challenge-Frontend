import { useMemo } from "react";
import { useInvoiceStore } from "../../../../store/invoices/invoices.store";

export const useInvoiceFilters = () => {
  const {
    rowData,
    statusFilter,
    dateFrom,
    dateTo,
    setStatusFilter,
    setDateFrom,
    setDateTo,
  } = useInvoiceStore();

  const filteredData = useMemo(() => {
    const fromDate = dateFrom ? new Date(dateFrom) : null;
    const toDate = dateTo ? new Date(dateTo) : null;

    
    return rowData.filter((invoice) => {
      if (statusFilter !== "ALL" && invoice.status !== statusFilter)
        return false;

      const invoiceDate =
        invoice.date instanceof Date ? invoice.date : new Date(invoice.date);

      if (fromDate && invoiceDate < fromDate) return false;
      if (toDate && invoiceDate > toDate) return false;

      return true;
    });
  }, [rowData, statusFilter, dateFrom, dateTo]);

  return {
    filteredData,
    statusFilter,
    setStatusFilter,
    dateFrom,
    setDateFrom,
    dateTo,
    setDateTo,
  };
};
