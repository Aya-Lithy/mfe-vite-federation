import { ToastContainer as LibToastContainer } from "react-toastify";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ToastContainer = () => {
  return (
    <LibToastContainer
      autoClose={7e3}
      bodyClassName="text-break"
      containerId="toast-container"
      closeButton={
        <div>
          <AiOutlineCloseCircle
            data-testid="toast-close-icon"
            style={{ fontSize: "1.5rem", width: "2rem", height: "2rem" }}
          />
        </div>
      }
    />
  );
};

export default ToastContainer;
