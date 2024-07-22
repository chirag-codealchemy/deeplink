// src/components/Toast.js
import React, { useEffect } from "react";

const Toast = ({ message, type, onClose }: { message: string; type: "info" | "success" | "warning" | "error"; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast toast-top">
      <div className={`alert alert-${type}`}>
        <div>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
