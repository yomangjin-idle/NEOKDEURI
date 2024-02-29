import { useEffect, useState } from "react";

export default function useIsModalOpen(isModalOpen, delay) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (isModalOpen) {
      setIsOpen(true);
    } else {
      timer = setTimeout(() => setIsOpen(false), delay);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isModalOpen]);

  return isOpen;
}
