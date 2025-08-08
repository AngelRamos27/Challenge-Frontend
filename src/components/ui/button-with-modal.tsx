import { type ReactNode } from "react";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
} from "@coreui/react";
import { useInvoiceModalStore } from "../../store/modal/modal.store";

type Props = {
  children: ReactNode;
  modalTitle?: string;
  modalContent?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const ButtonWithModal = ({
  children,
  modalTitle = "Modal",
  modalContent,
}: Props) => {
  const { isInvoiceModalOpen, openInvoiceModal, closeInvoiceModal } =
    useInvoiceModalStore();

  return (
    <>
      <CButton
        color="dark"
        className="w-auto lg:w-full "
        onClick={openInvoiceModal}
      >
        {children}
      </CButton>

      <CModal
        className="w-2/3 md:w-full lg:pt-2 pt-14"
        visible={isInvoiceModalOpen}
        onClose={closeInvoiceModal}
      >
        <CModalHeader>
          <CModalTitle>{modalTitle}</CModalTitle>
        </CModalHeader>

        <CModalBody>{modalContent ?? <p>Add a new invoice</p>}</CModalBody>
      </CModal>
    </>
  );
};

export default ButtonWithModal;
