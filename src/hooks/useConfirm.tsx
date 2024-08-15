import { type ReactNode, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogPrimitiveClose,
  DialogPrimitiveContent,
  DialogTitle
} from "@/components/ui/dialog";
import { X } from "lucide-react";

export type ConfirmProps = {
  title: ReactNode;
  message: ReactNode;
};

export const useConfirm = ({ title, message }: ConfirmProps) => {
  const [promise, setPromise] = useState<{
    resolve: (value: boolean) => void;
  } | null>(null);

  const confirm = () =>
    new Promise((resolve) => {
      setPromise({ resolve });
    });

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const ConfirmDialog = () => {
    return (
      <Dialog open={promise !== null}>
        <DialogPortal>
          <DialogOverlay />
          <DialogPrimitiveContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{message}</DialogDescription>
            </DialogHeader>
            <DialogFooter className="pt-2">
              <Button onClick={handleCancel} variant="outline">
                Cancel
              </Button>
              <Button onClick={handleConfirm}>Confirm</Button>
            </DialogFooter>
            <DialogPrimitiveClose>
              <X className="h-4 w-4" onClick={handleCancel} />
              <span className="sr-only">Close</span>
            </DialogPrimitiveClose>
          </DialogPrimitiveContent>
        </DialogPortal>
      </Dialog>
    );
  };

  return { ConfirmDialog, confirm };
};
