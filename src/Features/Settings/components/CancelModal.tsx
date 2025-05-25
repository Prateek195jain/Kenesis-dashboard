import { useEffect } from "react";
import { X } from "lucide-react";
import type { ProfileState } from "../state/store";

interface CancelModalProps {
  localProfile: ProfileState;
  handleCancel: () => void;
  handleCloseModal: () => void; // renamed from setOpenModal
}

const CancelModal = ({
  localProfile,
  handleCancel,
  handleCloseModal,
}: CancelModalProps) => {
  const {
    name,
    bio,
    profilePictureName,
    username,
    facebook,
    twitter,
    discord,
  } = localProfile;

  const details = [
    { label: "Name", value: name },
    { label: "Bio", value: bio },
    { label: "Picture Name", value: profilePictureName },
    { label: "Username", value: username },
    { label: "Facebook", value: facebook },
    { label: "Twitter", value: twitter },
    { label: "Discord", value: discord },
  ];

  const handleClose = () => handleCloseModal();

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.dataset.backdrop === "true") {
        handleClose();
      }
    };
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div
      data-backdrop="true"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-white/10 backdrop-blur-sm flex justify-center items-center"
    >
      <div
        className="p-px bg-gradient-to-b rounded-lg from-[#0680FF] via-[#070A2A] to-transparent relative"
        data-backdrop="false"
      >
        <div className="p-4 bg-[#070A2A] rounded-lg w-80" data-backdrop="false">
          {/* Close (X) Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-white hover:text-red-400 transition"
            data-backdrop="false"
            aria-label="Close cancel confirmation modal"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-white font-semibold text-lg mb-4">
            Are you sure you want to cancel the updates?
          </h2>

          <div className="space-y-2 mb-4">
            {details.map((item, index) => (
              <p key={index} className="text-white text-sm">
                <span className="font-semibold">{item.label}:</span>{" "}
                {item.value || "Not provided"}
              </p>
            ))}
          </div>

          <div className="flex justify-end gap-4">
            <button
              onClick={() => {
                handleCancel();
                handleClose();
              }}
              className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition"
            >
              Yes
            </button>
            <button
              onClick={handleClose}
              className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700 transition"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
