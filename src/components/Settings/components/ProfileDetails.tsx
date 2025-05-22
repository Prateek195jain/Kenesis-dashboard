import { User, Check, X } from "lucide-react";
import tooltip from "/images/tooltip.png";
import FileUploader from "./FileUploader";
import Checkbox from "./Checkbox";
import type { CheckboxProps } from "./type";
import SocialInput from "./SocialInput";
import { userProfileStore } from "../state/store";
import { useEffect, useState } from "react";

const checkBoxData: CheckboxProps[] = [
  {
    heading: "Reports",
    description: "Enable reports notifications",
  },
  {
    heading: "Sound",
    description: "Enable sound notifications",
  },
  {
    heading: "Vibration",
    description: "Enable vibration effect",
  },
];

const ProfileDetails = () => {
  const profileName = userProfileStore((state) => state.name);
  const updateProfileName = userProfileStore((state) => state.updateName);

  const profilePicture = userProfileStore((state) => state.profilePicture);
  const updateProfilePicture = userProfileStore(
    (state) => state.updateProfilePicture
  );

  const bio = userProfileStore((state) => state.bio);
  const updateBio = userProfileStore((state) => state.updateBio);

  const username = userProfileStore((state) => state.username);
  const updateUsername = userProfileStore((state) => state.updateUsername);

  const facebook = userProfileStore((state) => state.facebook);
  const updateFacebook = userProfileStore((state) => state.updateFacebook);

  const twitter = userProfileStore((state) => state.twitter);
  const updateTwitter = userProfileStore((state) => state.updateTwitter);

  const discord = userProfileStore((state) => state.discord);
  const updateDiscord = userProfileStore((state) => state.updateDiscord);

  const [localUsername, setLocalUsername] = useState<string>(username);
  const [localName, setLocalName] = useState<string>(profileName);
  const [localBio, setLocalBio] = useState<string>(bio);
  const [localProfilePicture, setLocalProfilePicture] =
    useState<string>(profilePicture);
  const [profilePictureName, setProfilePictureName] = useState<string>("");
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
    const updatedFields: Partial<{
      name: string;
      bio: string;
      profilePicture: string;
      profilePictureName: string;
      username: string;
      facebook: string;
      twitter: string;
      discord: string;
    }> = {};

    if (localName !== profileName) {
      updatedFields.name = localName;
      updateProfileName(localName);
    }
    if (localBio !== bio) {
      updatedFields.bio = localBio;
      updateBio(localBio);
    }
    if (localProfilePicture !== profilePicture) {
      updatedFields.profilePicture = localProfilePicture;
      updateProfilePicture(localProfilePicture);
      updatedFields.profilePictureName = profilePictureName;
    }

    if (localUsername !== username) {
      updatedFields.username = localUsername;
      updateUsername(localUsername);
    }

    if (localFacebook !== facebook) {
      updatedFields.facebook = localFacebook;
      updateFacebook(localFacebook);
    }

    if (localTwitter !== twitter) {
      updatedFields.twitter = localTwitter;
      updateTwitter(localTwitter);
    }

    if (localDiscord !== discord) {
      updatedFields.discord = localDiscord;
      updateDiscord(localDiscord);
    }

    console.log("Updated fields:", updatedFields);
  };

  const handleCancel = () => {
    console.log("Resetting to:", {
      profileName,
      bio,
      profilePicture,
      username,
    });
    setLocalName(profileName);
    setLocalBio(bio);
    setLocalProfilePicture(profilePicture);
    setLocalUsername(username);
    setLocalFacebook(facebook);
    setLocalTwitter(twitter);
    setLocalDiscord(discord);
    setProfilePictureName("");
  };

  return (
    <div className="mt-8 mx-8 p-px bg-gradient-to-b rounded-lg from-[#0680FF] via-[#070A2A] to-transparent">
      <div className="p-10 bg-[#070A2A] rounded-lg">
        {/* // Profile details */}
        <div className="flex flex-col gap-2 border-b-[0.5px] border-b-white/30 p-5">
          <h1 className="text-white text-xl font-semibold">Profile Details</h1>
          <p className="text-white/70">
            You can change your profile details here seamlessely.
          </p>
        </div>

        {/* Public profile */}
        <div className="flex flex-col lg:flex-row p-5 gap-10 border-b-[0.5px] border-b-white/30">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <h1 className="text-white font-semibold">Public profile</h1>
              <img src={tooltip}></img>
            </div>
            <p className="text-white/70 text-wrap">
              This is the main profile that will be visible for everyone
            </p>
            <a href="#" className=" text-blue-600 hover:underline">
              View Details
            </a>
          </div>
          <div className="flex flex-col gap-3 mt-4 lg:w-1/3 ">
            <div className="flex items-center border border-blue-600 rounded-full bg-[#0b0f23]">
              <span className="p-4 text-white/70">
                <User />
              </span>
              <input
                type="text"
                className="py-4 outline-0"
                placeholder="Gago Official"
                onChange={(e) => {
                  setLocalName(e.target.value);
                }}
                name={localName}
                autoComplete="off"
              />
            </div>
            <SocialInput
              URL="https://gago.com/"
              placeholder="X_AE_A-22"
              value={localUsername}
              onChange={setLocalUsername}
            />
          </div>
        </div>

        {/* Bio description */}
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-18 border-b-[0.5px] border-b-white/30 p-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-semibold">Bio Description</h1>
            <p className="text-white/70">
              This will be your main story keep it very, very long
            </p>
          </div>
          <textarea
            placeholder="Gago is one and only design system for intelligent, lazy gen Z people."
            className="bg-[#0b0f23] border border-blue-600 min-w-1/3 min-h-[20vh] outline-0 p-2 rounded-xl"
            name={localBio}
            onChange={(e) => {
              setLocalBio(e.target.value);
            }}
          ></textarea>
        </div>

        {/* profile picture */}
        <div className="flex flex-col lg:flex-row p-5 gap-4 lg:gap-20 border-b-[0.5px] border-b-white/30">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <h1 className="text-white font-semibold">Profile Picture</h1>
            </div>
            <p className="text-white/70 text-wrap">
              This is where people will see your actual face
            </p>
            <a href="#" className=" text-blue-600 hover:underline">
              View Details
            </a>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
            <img
              src={localProfilePicture}
              alt="Profile"
              className="w-20 lg:w-25 h-20  rounded-full border border-white"
            ></img>
            <FileUploader
              onUpload={(fileUrl, fileName) => {
                setLocalProfilePicture(fileUrl);
                setProfilePictureName(fileName);
              }}
            />
          </div>
        </div>

        {/* Notifications */}
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-18 border-b-[0.5px] border-b-white/30 p-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-semibold">Notification</h1>
            <p className="text-white/70">
              This is where you'll receive Notifications
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {checkBoxData.map((checkbox) => (
              <Checkbox
                key={checkbox.heading}
                heading={checkbox.heading}
                description={checkbox.description}
              />
            ))}
          </div>
        </div>
        {/* Social media Links  */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-25 border-b-[0.5px] border-b-white/30 p-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-semibold">Social Media Links</h1>
            <p className="text-white/70">Links for your social media</p>
          </div>
          <div className="flex flex-col gap-4 lg:w-2/3">
            <SocialInput
              URL="facebook.com/"
              placeholder="X_GAGO_A-22"
              value={localFacebook}
              onChange={setLocalFacebook}
            />
            <SocialInput
              URL="twitter.com/"
              placeholder="GAGO_AE_A-22"
              value={localTwitter}
              onChange={setLocalTwitter}
            />
            <SocialInput
              URL="discord.com/"
              placeholder="X_AE_GAGO-22"
              value={localDiscord}
              onChange={setLocalDiscord}
            />
            <div className="flex justify-end gap-4">
              <button
                className="flex h-10 w-fit items-center gap-2 px-4 border text-white rounded-full lg:text-sm md:text-sm text-xs font-semibold"
                onClick={handleCancel}
              >
                Cancel
                <span>
                  <X />
                </span>
              </button>
              <button
                className="flex h-10 w-fit items-center gap-2 px-4  text-white rounded-full bg-blue-700 lg:text-sm md:text-sm text-xs font-semibold"
                onClick={handleSave}
              >
                Save Settings{" "}
                <span>
                  <Check />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
