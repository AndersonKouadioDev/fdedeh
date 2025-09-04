"use client";

import {useCallback} from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {IUtilisateur} from "../../types/utilisateur.type";
import {useActiverUtilisateurMutation, useDesactiverUtilisateurMutation,} from "../../queries/utilisateur.mutation";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  utilisateur: IUtilisateur | null;
};

export function UtilisateurLockUnlockModal({
  isOpen,
  setIsOpen,
  utilisateur,
}: Props) {
  const { mutateAsync: activerMutation, isPending: isActivating } =
    useActiverUtilisateurMutation();
  const { mutateAsync: desactiverMutation, isPending: isDeactivating } =
    useDesactiverUtilisateurMutation();

  const isPending = isActivating || isDeactivating;

  const handleClose = useCallback(() => {
    if (!isPending) {
      setIsOpen(false);
    }
  }, [isPending, setIsOpen]);

  const isLocked =
    utilisateur?.status === "INACTIVE" ||
    utilisateur?.status === "DELETED" ||
    false;

  const actionText = isLocked ? "Activer" : "Verrouiller";
  const actionMessage = isLocked
    ? "Cet utilisateur pourra se connecter à nouveau"
    : "Cet utilisateur ne pourra plus se connecter";

  const handleLockUnlock = useCallback(async () => {
    if (isLocked) {
      await activerMutation(utilisateur?.id || "");
    } else {
      await desactiverMutation(utilisateur?.id || "");
    }

    handleClose();
  }, [utilisateur, isLocked, activerMutation, desactiverMutation, handleClose]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-medium text-gray-900 mb-4">
            {`${actionText} ${utilisateur?.firstName} ${utilisateur?.lastName}`}
          </DialogTitle>
          <DialogDescription className="mb-6">
            <p className="text-sm text-gray-600 mb-2">
              Êtes-vous sûr de vouloir {actionText.toLowerCase()} cet
              utilisateur ?
            </p>
            <p className="text-sm text-gray-500">{actionMessage}</p>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            disabled={isPending}
            className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
          >
            Annuler
          </Button>
          <Button
            type="button"
            onClick={handleLockUnlock}
            disabled={isPending}
            className={`px-4 py-2 text-sm text-white rounded-md disabled:opacity-50 ${
              isLocked
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {isPending
              ? isLocked
                ? "Activation..."
                : "Verrouillage..."
              : actionText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
