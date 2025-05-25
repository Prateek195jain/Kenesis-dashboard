import { create } from "zustand";

export interface ProfileState {
  name: string;
  username: string;
  bio: string;
  profilePicture: string;
  profilePictureName: string;
  facebook: string;
  twitter: string;
  discord: string;
}

interface ProfileActions {
  updateField: <K extends keyof ProfileState>(
    key: K,
    value: ProfileState[K]
  ) => void;
  updateProfile: (update: Partial<ProfileState>) => void;
  resetProfile: () => void;
}

const initialProfile: ProfileState = {
  name: "",
  username: "",
  bio: "",
  profilePicture: "/images/profile.png",
  profilePictureName: "",
  facebook: "",
  twitter: "",
  discord: "",
};

export const userProfileStore = create<ProfileState & ProfileActions>(
  (set) => ({
    ...initialProfile,

    updateField: (key, value) =>
      set((state) => ({
        ...state,
        [key]: value,
      })),

    updateProfile: (updates) =>
      set((state) => ({
        ...state,
        ...updates,
      })),

    resetProfile: () => set(() => ({ ...initialProfile })),
  })
);
