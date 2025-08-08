import { BASE_MESSAGES } from "../shared/shared.base.messages";

export const INVOICES_MESSAGES = {
  CREATED_OK: (number: string) => BASE_MESSAGES.OK(`Created invoice ${number}`),
  CREATED_ERR: BASE_MESSAGES.ERR(`create the invoice`),

  //   UPDATED_OK: (number: string) => BASE_MESSAGES.OK(`Updated invoice ${number}`),
  //   UPDATED_ERR: BASE_MESSAGES.ERR(`update the invoice`),

  //   DELETED_OK: (number: string) => BASE_MESSAGES.OK(`Deleted invoice ${number}`),
  //   DELETED_ERR: BASE_MESSAGES.ERR(`delete the invoice`),

  //   FOUND_OK: BASE_MESSAGES.OK(`found the invoice`),
  //   FOUND_ERR: BASE_MESSAGES.ERR(`find the invoice`),

  //   LISTED_OK: BASE_MESSAGES.OK(`listed the invoices`),
  //   LISTED_ERR: BASE_MESSAGES.ERR(`list the invoices`),

  //   EMPTY: "There are no registered invoices",
  //   NOT_FOUND: "The invoice was not found",
  //
} as const;
