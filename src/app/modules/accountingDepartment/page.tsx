import { useState } from "react";
import TitleLabel from "../../../components/ui/title-label";
import ButtonWithModal from "../../../components/ui/button-with-modal";
import { InvoiceForm } from "./_components/invoice.form";
import PlusIcon from "../../../components/icons/plus-icon";
import InvoicesTable from "./_components/invoice.table";

const AccountingDepartmentPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full h-screen flex flex-col md:p-5 p-3 items-start justify-start">
      <div className="w-full flex items-center justify-between">
        <TitleLabel
          size="text-xl md:text-2xl lg:text-4xl text-left"
          text="Accounting Department"
        />
        <ButtonWithModal
          modalTitle="New Invoice"
          modalContent={<InvoiceForm onClose={closeModal} />}
          isOpen={isModalOpen}
          onClose={closeModal}
        >
          <div className="flex md:flex-row flex-col items-center text-white">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden sm:inline ml-2">Add Invoice</span>
          </div>
        </ButtonWithModal>
      </div>
      <div className="w-full h-auto">
        <InvoicesTable />
      </div>
    </div>
  );
};

export default AccountingDepartmentPage;
