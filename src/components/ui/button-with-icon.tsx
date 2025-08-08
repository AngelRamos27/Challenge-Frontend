import { type ReactNode } from "react";
import { CButton } from "@coreui/react";

type Props = {
  children: ReactNode;
};

const ButtonWithIcon = ({ children }: Props) => {
  return (
    <>
      <CButton color="dark" className="w-full flex flex-row">
        {children}
      </CButton>
    </>
  );
};

export default ButtonWithIcon;
