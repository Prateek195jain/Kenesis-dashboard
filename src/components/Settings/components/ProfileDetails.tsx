import tooltip from "/images/tooltip.png";
import PublicProfileSection from "./sections/PublicProfileSection";
import BioSection from "./sections/BioSection";
import ProfilePictureSection from "./sections/ProfilePictureSection";
import NotificationSection from "./sections/NotificationSection";
import SocialLinksSection from "./sections/SocialLinksSection";
import { useProfileForm } from "../hooks/useProfileForm";
import ProfileDetailsHeading from "./sections/ProfileDetailsHeading";
import { checkBoxData } from "../mockdata/checkBoxData";

const ProfileDetails = () => {
  const {
    localName,
    setLocalName,
    localBio,
    setLocalBio,
    localProfilePicture,
    setLocalProfilePicture,
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
  } = useProfileForm();

  return (
    <div className="mt-8 mx-8 p-px bg-gradient-to-b rounded-lg from-[#0680FF] via-[#070A2A] to-transparent">
      <div className="p-4 bg-[#070A2A] rounded-lg">
        <ProfileDetailsHeading />

        <PublicProfileSection
          tooltip={tooltip}
          localName={localName}
          setLocalName={setLocalName}
          localUsername={localUsername}
          setLocalUsername={setLocalUsername}
        />

        <BioSection localBio={localBio} setLocalBio={setLocalBio} />

        <ProfilePictureSection
          localProfilePicture={localProfilePicture}
          setLocalProfilePicture={setLocalProfilePicture}
          setProfilePictureName={setProfilePictureName}
        />

        <NotificationSection checkBoxData={checkBoxData} />

        <SocialLinksSection
          localFacebook={localFacebook}
          setLocalFacebook={setLocalFacebook}
          localTwitter={localTwitter}
          setLocalTwitter={setLocalTwitter}
          localDiscord={localDiscord}
          setLocalDiscord={setLocalDiscord}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default ProfileDetails;
