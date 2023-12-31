import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { updateClass } from "../../api/classes";
import { toast } from "react-hot-toast";
import { ImSpinner3 } from "react-icons/im";
const FeedbackModal = ({ closeModal, isOpen, id, refetch }) => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    console.log(feedback);
    updateClass({ feedback }, id)
      .then((data) => {
        if (data.modifiedCount > 0) {
          closeModal();
          refetch();
          toast.success("Feedback Sent");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900">
                  Write Your Feedback
                </Dialog.Title>
                <div className="mt-2">
                  <textarea
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="feedback..."
                    className="w-full h-28 p-3 outline-teal-300  border-2 rounded border-gray-200"></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => handleSubmit(id)}>
                    {loading ? (
                      <ImSpinner3 size={18} className="animate-spin" />
                    ) : (
                      "Send"
                    )}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FeedbackModal;
