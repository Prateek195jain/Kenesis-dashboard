import { userProfileStore } from "../state/store";
import { useEffect, useState } from "react";

export const useProfileForm = () => {
  const {
    name,
    bio,
    username,
    profilePicture,
    profilePictureName,
    twitter,
    facebook,
    discord,
    updateProfile,
    resetProfile,
  } = userProfileStore();

  const [localProfile, setLocalProfile] = useState({
    name,
    bio,
    username,
    profilePicture,
    profilePictureName,
    twitter,
    facebook,
    discord,
  });

  const [activeModal, setActiveModal] = useState<null | "save" | "cancel">(
    null
  );

  useEffect(() => {
    setLocalProfile({
      name,
      username,
      bio,
      profilePicture,
      profilePictureName,
      facebook,
      twitter,
      discord,
    });
  }, [
    name,
    username,
    bio,
    profilePicture,
    profilePictureName,
    facebook,
    twitter,
    discord,
  ]);

  const handleFieldChange = <K extends keyof typeof localProfile>(
    key: K,
    value: (typeof localProfile)[K]
  ) => {
    setLocalProfile((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    const changedFields: Partial<typeof localProfile> = {};
    for (const key in localProfile) {
      if (
        localProfile[key as keyof typeof localProfile] !==
        userProfileStore.getState()[key as keyof typeof localProfile]
      ) {
        changedFields[key as keyof typeof localProfile] =
          localProfile[key as keyof typeof localProfile];
      }
    }

    if (Object.keys(changedFields).length > 0) {
      updateProfile(changedFields);
      console.log("updated Fields: ", changedFields);
    }

    resetProfile();
    setActiveModal(null);
  };

  const handleCancel = () => {
    setLocalProfile({
      name,
      username,
      bio,
      profilePicture,
      profilePictureName: "",
      facebook,
      twitter,
      discord,
    });
    resetProfile();
    setActiveModal(null);
  };

  const handleOpenModal = (modalType: "save" | "cancel") => {
    setActiveModal(modalType);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return {
    localProfile,
    setLocalProfile,
    handleCancel,
    handleFieldChange,
    handleSave,
    activeModal,
    handleCloseModal,
    handleOpenModal,
  };
};
