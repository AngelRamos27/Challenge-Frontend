import { CToast, CToastBody, CToastHeader } from "@coreui/react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "";
  onClose: () => void;
}

export const Toast = ({ message, type, onClose }: ToastProps) => {
  const notificationTitle = type === "success" ? "Success" : "Error";
  return (
    <CToast
      animation={true}
      autohide={true}
      delay={4000}
      visible={true}
      onClose={onClose}
    >
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#242831"></rect>
        </svg>
        <div className="fw-bold me-auto">{notificationTitle}</div>
      </CToastHeader>
      <CToastBody>{message}</CToastBody>
    </CToast>
  );
};

export default Toast;
