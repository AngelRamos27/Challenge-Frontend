import { Formik, Form, Field, ErrorMessage } from "formik";
import { createInvoiceSchema } from "../../../../features/accountingDepartment/invoices/invoices.schemas";
import type { Invoice } from "../../../../features/accountingDepartment/invoices/invoices.models";

interface InvoiceFormProps {
  onSubmit?: (values: Invoice) => void;
  onClose: () => void;
}

export const InvoiceForm = ({ onSubmit, onClose }: InvoiceFormProps) => {
  return (
    <Formik<Invoice>
      initialValues={{
        clientName: "",
        date: new Date(""),
        amount: 0,
        status: "",
      }}
      validationSchema={createInvoiceSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.setSubmitting(false);
        onClose();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 w-full  p-2">
          <div className="flex  flex-col gap-2">
            <label className="block mb-1 font-bold">Client Name</label>
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

          <div className="flex  flex-col gap-2">
            <label className="block mb-1 font-bold">Date</label>
            <Field name="date" type="date" className="border p-2 rounded" />
            <ErrorMessage
              name="date"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="flex  flex-col gap-2">
            <label className="block mb-1 font-bold">Amount</label>
            <Field name="amount" type="number" className="border p-2 rounded" />
            <ErrorMessage
              name="amount"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="flex  flex-col gap-2">
            <label className="block mb-1 font-bold">Status</label>
            <Field as="select" name="status" className="border p-2  rounded">
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </Field>
            <ErrorMessage
              name="status"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
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
