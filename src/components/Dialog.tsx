import { Dialog as HuiDialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Button } from "./Button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  buttonText?: string;
}

export const Dialog = ({
  isOpen,
  onClose,
  title,
  content,
  buttonText,
}: Props) => (
  <Transition appear show={isOpen} as={Fragment}>
    <HuiDialog as="div" className="relative z-10" onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <HuiDialog.Panel className="w-full max-w-xl space-y-4 overflow-hidden rounded-2xl bg-base-50 p-6 text-left align-middle shadow-xl transition-all">
              <HuiDialog.Title className="text-accent text-3xl sm:text-4xl">
                {title}
              </HuiDialog.Title>
              <div className="max-h-[min(calc(100vh-16rem),20rem)] space-y-4 overflow-y-scroll text-base-700">
                {content}
              </div>

              <Button type="button" variant="secondary" onClick={onClose}>
                {buttonText ?? "Alles klar"}
              </Button>
            </HuiDialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </HuiDialog>
  </Transition>
);
