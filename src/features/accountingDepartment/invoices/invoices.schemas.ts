import * as Yup from "yup";
import { NAME_REGEX } from "../shared/shared.regex";

export const createInvoiceSchema = Yup.object().shape({
  clientName: Yup.string()
    .matches(NAME_REGEX, "Please enter a valid client name")
    .required("Required"),
  date: Yup.date().required("Required"),
  amount: Yup.number()
    .required("Required")
    .positive("Must be a positive number")
    .min(1, "Must be at least 1"),
  status: Yup.boolean().required("Required"),
});

export const updateInvoiceSchema = Yup.object()
  .shape({
    invoiceNumber: Yup.string().optional(),
  })
  .concat(createInvoiceSchema);
