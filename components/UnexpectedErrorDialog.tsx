import { Dialog } from "./Dialog";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const UnexpectedErrorDialog = ({ isOpen, onClose }: Props) => (
  <Dialog
    isOpen={isOpen}
    onClose={onClose}
    title="Unerwarteter Fehler"
    content="Es ist ein unerwarteter Fehler aufgetreten. Bitte versuche es später erneut."
  />
);
