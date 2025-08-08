import { useToastStore } from "../../store/toast/toast.store";
import Toast from "./toast";

export const ToastContainer = () => {
  const { isVisible, message, type, hideToast } = useToastStore();

  if (!isVisible) return null;
  return (
    <div className="fixed bottom-0 right-0 p-3 z-[1000000] ">
      <Toast message={message} type={type} onClose={hideToast} />
    </div>
  );
};
