"use client";

import { FC, useEffect, useState } from "react";
import CreateServerModal from "../modals/createServerModal";
import InviteModal from "../modals/InviteModal";

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
      <InviteModal />
    </div>
  );
};

export default ModalProvider;
