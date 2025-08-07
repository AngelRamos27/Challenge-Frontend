import type { Meta, StoryObj } from "@storybook/react";
import { InvoiceForm } from "./invoice.form";
import "../../../../App.css";
import "@coreui/coreui/dist/css/coreui.min.css";

const meta: Meta<typeof InvoiceForm> = {
  title:
    "app/modules/accountingDepartment/_components/invoice-form/invoice.form.tsx",
  component: InvoiceForm,
  args: {
    id: undefined,
  },
};

export default meta;

type Story = StoryObj<typeof InvoiceForm>;

export const Default: Story = {
  args: {
    id: undefined,
  },
};
