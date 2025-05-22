import { create } from "zustand";

interface profileType {
  name: string;
  username: string;
  bio: string;
  profilePicture: string;

  facebook: string;
  twitter: string;
  discord: string;

  updateName: (name: string) => void;
  updateUsername: (username: string) => void;
  updateBio: (bio: string) => void;
  updateProfilePicture: (profilePicture: string) => void;
  updateFacebook: (facebook: string) => void;
  updateTwitter: (twitter: string) => void;
  updateDiscord: (discord: string) => void;
}

export const userProfileStore = create<profileType>((set) => ({
  name: "",
  username: "",
  bio: "",
  profilePicture: "/images/profile.png",
  facebook: "",
  twitter: "",
  discord: "",

  updateName: (name) => set(() => ({ name: name })),
  updateUsername: (username) => set(() => ({ username: username })),
  updateBio: (bio) => set(() => ({ bio: bio })),
  updateProfilePicture: (profilePicture) =>
    set(() => ({ profilePicture: profilePicture })),
  updateFacebook: (facebook) => set(() => ({ facebook })),
  updateTwitter: (twitter) => set(() => ({ twitter })),
  updateDiscord: (discord) => set(() => ({ discord })),
}));
