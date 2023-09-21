import { useState } from "react";

export type UseDisclose = (onOpenCb?: () => void) => {
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isOpen: boolean;
};

export const useDisclose: UseDisclose = (onOpenCb) => {
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
    onOpenCb?.();
  };

  const onToggle = () => {
    setOpen(!isOpen);
  };

  const onClose = () => {
    setOpen(false);
  };
  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};
