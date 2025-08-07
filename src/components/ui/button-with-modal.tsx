import { useState, type ReactNode } from "react";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
} from "@coreui/react";

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
  const [visible, setVisible] = useState(false);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  return (
    <>
      <CButton
        color="dark"
        className="w-auto lg:w-full "
        onClick={openModal}
      >
        {children}
      </CButton>

      <CModal
        className="w-2/3 md:w-full"
        visible={visible}
        onClose={closeModal}
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
