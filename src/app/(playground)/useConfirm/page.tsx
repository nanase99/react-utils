"use client";

import { useConfirm } from "@/hooks/useConfirm";
import { useState } from "react";

const Page = () => {
  const [result, setResult] = useState("");
  const { ConfirmDialog, confirm } = useConfirm({
    title: "title",
    message: "message"
  });
  const handleClick = async () => {
    const res = await confirm();
    if (res) {
      console.log("ok");
      setResult("ok");
    } else {
      console.log("cancel");
      setResult("cancel");
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center gap-4">
      <button type="button" onClick={handleClick}>
        open dialog
      </button>
      <p>result: {result}</p>
      <ConfirmDialog />
    </div>
  );
};
export default Page;
