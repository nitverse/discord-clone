"use client";
import { FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

import { useModal } from "@/hooks/useModalStore";
import { Button } from "../ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";


interface DeleteServerModalProps {}

const DeleteServerModal: FC<DeleteServerModalProps> = ({}) => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter(); 
  const isModalOpen = isOpen && type == "deleteServer";
  const { server } = data;

  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/servers/${server?.id}/delete`);

      onClose();
      router.refresh();
      router.push("/");

    } catch (error) {
      console.error(error);
    }
    finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white text-black p-0 overflow-hidden">
          <DialogHeader className="pt-8 px-8">
            <DialogTitle className="text-2xl text-center font-bold">
              Delete Server
            </DialogTitle>
            <DialogDescription className="text-center text-zinc-500">
              Are you sure you want to do this? <br /> <span className="font-semibold text-indigo-500">{server?.name}</span> will be permanently deleted.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="bg-gray-100 px-6 py-4 ">
            <div className="flex items-center justify-between w-full">
              <Button disabled = {isLoading} onClick={onClose} variant="destructive" className="bg-indigo-500">
                Cancel
              </Button>
              <Button disabled = {isLoading} onClick= {onClick} variant = "secondary" className="bg-red-500">
                Confirm
              </Button>
            </div>
         </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteServerModal;
