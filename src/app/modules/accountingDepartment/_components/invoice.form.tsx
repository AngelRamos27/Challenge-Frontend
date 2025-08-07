import { Formik, Form, Field, ErrorMessage } from "formik";
import { createInvoiceSchema } from "../../../../features/accountingDepartment/invoices/invoices.schemas";
import type { Invoice } from "../../../../features/accountingDepartment/invoices/invoices.models";
import {
  useInvoiceFormStore,
  useInvoiceStore,
} from "../../../../store/invoices/invoices.store";
import { generateInvoiceNumber } from "../../../../utils/mockInvoices";
import { useToastStore } from "../../../../store/toast/toast.store";
import { INVOICES_MESSAGES } from "../../../../features/accountingDepartment/invoices/invoices.messages";

interface InvoiceFormProps {
  onClose: () => void;
}

export const InvoiceForm = ({ onClose }: InvoiceFormProps) => {
  const { invoice, resetInvoice } = useInvoiceFormStore();
  const { addInvoice } = useInvoiceStore();
  const { showToast } = useToastStore();

  return (
    <Formik<Invoice>
      initialValues={invoice}
      enableReinitialize
      validationSchema={createInvoiceSchema}
      onSubmit={(values, actions) => {
        try {
          const invoiceWithNumber = {
            ...values,
            invoiceNumber: generateInvoiceNumber(),
            id: crypto.randomUUID(),
          };

          addInvoice(invoiceWithNumber);
          actions.setSubmitting(false);
          resetInvoice();
          onClose();
          showToast(
            INVOICES_MESSAGES.CREATED_OK(invoiceWithNumber.invoiceNumber),
            "success"
          );
        } catch (error) {
          console.error("Error creating invoice:", error);
          showToast(INVOICES_MESSAGES.CREATED_ERR, "error");
          actions.setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 w-full p-2">
          <div className="flex flex-col gap-2">
            <label className="font-bold">Client Name</label>
            <Field
              name="clientName"
              className="border p-2 rounded"
              placeholder="Enter client name"
            />
            <ErrorMessage
              name="clientName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold">Date</label>
            <Field name="date" type="date" className="border p-2 rounded" />
            <ErrorMessage
              name="date"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold">Amount</label>
            <Field name="amount" type="number" className="border p-2 rounded" />
            <ErrorMessage
              name="amount"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold">Status</label>
            <Field as="select" name="status" className="border p-2 rounded">
              <option value="">Select status</option>
              <option value="PAID">Paid</option>
              <option value="UNPAID">Unpaid</option>
            </Field>
            <ErrorMessage
              name="status"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
