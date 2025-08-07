import { useState } from "react";
import ButtonWithModal from "../../../components/ui/button-with-modal";
import { InvoiceForm } from "./_components/invoice.form";
import PlusIcon from "../../../components/icons/plus-icon";
import InvoicesTable from "./_components/invoice.table";
import { ToastContainer } from "../../../components/ui/toast-container";
import HeaderModules from "../../../components/ui/header-modules";

const AccountingDepartmentPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full h-screen flex flex-col md:p-5 p-3 items-center justify-start">
      <HeaderModules>
        <ButtonWithModal
          modalTitle="New Invoice"
          modalContent={<InvoiceForm onClose={() => setIsModalOpen(false)} />}
          isOpen={isModalOpen}
          onClose={closeModal}
        >
          <div className="flex md:flex-row flex-col items-center text-white">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden sm:inline ml-2">Add Invoice</span>
          </div>
        </ButtonWithModal>
      </HeaderModules>
      <div className="w-full h-auto">
        <InvoicesTable />
      </div>
      <ToastContainer />
    </div>
  );
};

export default AccountingDepartmentPage;
