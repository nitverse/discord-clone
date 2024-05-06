"use client";

import { FC, useEffect, useState } from "react";
import CreateServerModal from "../modals/createServerModal";

interface ModalProviderProps {}

const ModalProvider: FC<ModalProviderProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted){
    return null;
  }

  return (
    <div>
      <CreateServerModal />
    </div>
  );
};

export default ModalProvider;
