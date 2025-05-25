import { useEffect } from "react";
import type { ProfileState } from "../state/store";

const SaveModal = ({
  localProfile,
  handleSave,
  handleCancel,
  handleCloseModal,
}: {
  localProfile: ProfileState;
  handleSave: () => void;
  handleCancel: () => void;
  handleCloseModal: () => void;
}) => {
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
        className="p-px bg-gradient-to-b rounded-lg from-[#0680FF] via-[#070A2A] to-transparent"
        data-backdrop="false"
      >
        <div className="p-4 bg-[#070A2A] rounded-lg w-80" data-backdrop="false">
          <h2 className="text-white font-semibold text-lg mb-4">
            Confirm Your Details
          </h2>
          <div className="space-y-2 mb-4">
            {details.map((item, index) => (
              <p key={index} className="text-white text-sm">
                <span className="font-semibold">{item.label}:</span>{" "}
                {item.value || "Not provided"}
              </p>
            ))}
          </div>
          <p className="text-white text-sm mb-4">
            Are you sure you want to update this data?
          </p>
          <div className="flex justify-end gap-4">
            <button
              onClick={handleClose}
              className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700 transition"
            >
              Close
            </button>
            <button
              onClick={() => {
                handleSave();
                handleCancel();
              }}
              className="px-4 py-2 text-white bg-[#0680FF] rounded hover:bg-blue-700 transition"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveModal;
