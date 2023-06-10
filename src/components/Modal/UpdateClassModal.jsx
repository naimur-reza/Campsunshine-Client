import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import UpdateClassForm from "../Forms/UpdateClassForm";
import { useForm } from "react-hook-form";
import { uploadImage } from "../../api/utils";
import { updateClass } from "../../api/classes";
import { toast } from "react-hot-toast";

const UpdateClassModal = ({ closeModal, isOpen, _id, classInfo, refetch }) => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register } = useForm();
  const [imageData, setImageData] = useState("");
  const handleImageUpdate = (image) => {
    console.log("runningg");
    setLoading(true);
    uploadImage(image)
      .then((res) => {
        console.log(res);
        setImageData(res.data.display_url);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const onSubmit = (data) => {
    const updatedData = Object.assign(
      {},
      { ...data, image: imageData || data.image }
    );
    delete updatedData._id;
    setLoading(true);
    updateClass(updatedData, classInfo._id)
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Class Info Updated");
          setLoading(false);
          refetch();
          closeModal();
        } else {
          setLoading(false);
          closeModal();
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        closeModal();
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
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <h1 className="text-xl py-2 mb-6 rounded-lg text-white text-center  bg-teal-400">
                  Update Your Class
                </h1>
                <UpdateClassForm
                  closeModal={closeModal}
                  classInfo={classInfo}
                  handleSubmit={handleSubmit}
                  onSubmit={onSubmit}
                  register={register}
                  handleImageUpdate={handleImageUpdate}
                  loading={loading}
                  _id={_id}
                />
                <div className="mt-4"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateClassModal;
