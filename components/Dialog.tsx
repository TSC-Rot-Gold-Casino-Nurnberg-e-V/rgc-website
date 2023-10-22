import { Dialog as HuiDialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

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
            <HuiDialog.Panel className="w-full max-w-xl overflow-hidden rounded-2xl bg-base-50 p-6 text-left align-middle shadow-xl transition-all">
              <HuiDialog.Title className="heading-small sm:heading-normal text-accent">
                {title}
              </HuiDialog.Title>
              <div className="mt-4 max-h-[min(calc(100vh-16rem),20rem)] space-y-4 overflow-y-scroll text-base-700">
                {content}
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="text-normal rounded-md border border-transparent bg-secondary-100 px-4 py-2 font-medium text-accent transition-colors hover:bg-secondary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2"
                  onClick={onClose}
                >
                  {buttonText || "Alles klar"}
                </button>
              </div>
            </HuiDialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </HuiDialog>
  </Transition>
);
