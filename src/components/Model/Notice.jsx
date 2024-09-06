import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "../common/Button";

const Notice = () => {
  // 使用 useRef 获取 dialog 元素的引用
  const dialogRef = useRef(null);

  // 显示对话框
  const showModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  // 关闭对话框
  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  useEffect(() => {
    showModal();
  }, []);

  return createPortal(
    <>
      <dialog
        ref={dialogRef}
        className="flex w-52 bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-2"
      >
        <div>NoticeNoticeNo</div>
        <Button onClick={closeModal} className="mt-auto ms-auto">
          Close
        </Button>
      </dialog>
    </>,
    document.getElementById("modal")
  );
};

export default Notice;
