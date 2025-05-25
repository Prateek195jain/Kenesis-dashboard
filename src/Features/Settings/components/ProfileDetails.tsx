import { useProfileForm } from "../hooks/useProfileForm";
import { checkBoxData } from "../mockdata/checkBoxData";
import BioSection from "../sections/BioSection";
import NotificationSection from "../sections/NotificationSection";
import ProfileDetailsHeading from "../sections/ProfileDetailsHeading";
import ProfilePictureSection from "../sections/ProfilePictureSection";
import PublicProfileSection from "../sections/PublicProfileSection";
import SocialLinksSection from "../sections/SocialLinksSection";
import CancelModal from "./CancelModal";
import SaveModal from "./SaveModal";
import tooltip from "/images/tooltip.png";

const ProfileDetails = () => {
  const {
    localProfile,
    handleCancel,
    handleFieldChange,
    activeModal,
    handleOpenModal,
    handleSave,
    handleCloseModal,
  } = useProfileForm();

  return (
    <div className="mt-8 mx-8 p-px bg-gradient-to-b rounded-lg from-[#0680FF] via-[#070A2A] to-transparent">
      <div className="p-4 bg-[#070A2A] rounded-lg">
        <ProfileDetailsHeading />

        <PublicProfileSection
          tooltip={tooltip}
          name={localProfile.name}
          onNameChange={(value) => handleFieldChange("name", value)}
          username={localProfile.username}
          onUsernameChange={(value) => handleFieldChange("username", value)}
        />

        <BioSection
          bio={localProfile.bio}
          onBioChange={(value) => handleFieldChange("bio", value)}
        />

        <ProfilePictureSection
          profilePicture={localProfile.profilePicture}
          profilePictureName={localProfile.profilePictureName}
          onProfilePicChange={(value) =>
            handleFieldChange("profilePicture", value)
          }
          onProfilePicNameChange={(value) =>
            handleFieldChange("profilePictureName", value)
          }
        />

        <NotificationSection checkBoxData={checkBoxData} />

        <SocialLinksSection
          facebook={localProfile.facebook}
          onFacebookChange={(value) => handleFieldChange("facebook", value)}
          twitter={localProfile.twitter}
          onTwitterChange={(value) => handleFieldChange("twitter", value)}
          discord={localProfile.discord}
          onDiscordChange={(value) => handleFieldChange("discord", value)}
          handleOpenModal={handleOpenModal}
        />
      </div>
      {activeModal === "save" && (
        <SaveModal
          localProfile={localProfile}
          handleSave={handleSave}
          handleCancel={handleCancel}
          handleCloseModal={handleCloseModal}
        />
      )}

      {activeModal === "cancel" && (
        <CancelModal
          localProfile={localProfile}
          handleCancel={handleCancel}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ProfileDetails;
