import { useState, useEffect } from "react";
import { userProfileStore } from "../state/store";

export const useProfileForm = () => {
  const {
    name: profileName,
    updateName: updateProfileName,
    bio,
    updateBio,
    profilePicture,
    updateProfilePicture,
    username,
    updateUsername,
    facebook,
    updateFacebook,
    twitter,
    updateTwitter,
    discord,
    updateDiscord,
  } = userProfileStore();

  const [localName, setLocalName] = useState(profileName);
  const [localBio, setLocalBio] = useState(bio);
  const [localProfilePicture, setLocalProfilePicture] =
    useState(profilePicture);
  const [profilePictureName, setProfilePictureName] = useState("");
  const [localUsername, setLocalUsername] = useState(username);
  const [localFacebook, setLocalFacebook] = useState(facebook);
  const [localTwitter, setLocalTwitter] = useState(twitter);
  const [localDiscord, setLocalDiscord] = useState(discord);

  useEffect(() => {
    setLocalName(profileName);
    setLocalBio(bio);
    setLocalProfilePicture(profilePicture);
    setLocalUsername(username);
    setLocalFacebook(facebook);
    setLocalTwitter(twitter);
    setLocalDiscord(discord);
  }, [profileName, bio, profilePicture, username, facebook, twitter, discord]);

  const handleSave = () => {
    const updatedFields: Record<string, string> = {};

    if (localName !== profileName) {
      updateProfileName(localName);
      updatedFields.name = localName;
    }
    if (localBio !== bio) {
      updateBio(localBio);
      updatedFields.bio = localBio;
    }
    if (localProfilePicture !== profilePicture) {
      updateProfilePicture(localProfilePicture);
      updatedFields.profilePicture = localProfilePicture;
      updatedFields.profilePictureName = profilePictureName;
    }
    if (localUsername !== username) {
      updateUsername(localUsername);
      updatedFields.username = localUsername;
    }
    if (localFacebook !== facebook) {
      updateFacebook(localFacebook);
      updatedFields.facebook = localFacebook;
    }
    if (localTwitter !== twitter) {
      updateTwitter(localTwitter);
      updatedFields.twitter = localTwitter;
    }
    if (localDiscord !== discord) {
      updateDiscord(localDiscord);
      updatedFields.discord = localDiscord;
    }

    console.log("Updated fields:", updatedFields);
  };

  const handleCancel = () => {
    setLocalName(profileName);
    setLocalBio(bio);
    setLocalProfilePicture(profilePicture);
    setProfilePictureName("");
    setLocalUsername(username);
    setLocalFacebook(facebook);
    setLocalTwitter(twitter);
    setLocalDiscord(discord);
  };

  return {
    localName,
    setLocalName,
    localBio,
    setLocalBio,
    localProfilePicture,
    setLocalProfilePicture,
    profilePictureName,
    setProfilePictureName,
    localUsername,
    setLocalUsername,
    localFacebook,
    setLocalFacebook,
    localTwitter,
    setLocalTwitter,
    localDiscord,
    setLocalDiscord,
    handleSave,
    handleCancel,
  };
};
