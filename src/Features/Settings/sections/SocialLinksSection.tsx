import { Check, X } from "lucide-react";
import SocialInput from "../components/SocialInput";

interface Props {
  facebook: string;
  onFacebookChange: (value: string) => void;
  twitter: string;
  onTwitterChange: (value: string) => void;
  discord: string;
  onDiscordChange: (value: string) => void;
  handleOpenModal: (modalType: "save" | "cancel") => void; // expect modal type arg
}

const SocialLinksSection = ({
  facebook,
  onFacebookChange,
  twitter,
  onTwitterChange,
  discord,
  onDiscordChange,
  handleOpenModal,
}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-60 border-b-[0.5px] border-b-white/30 p-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-white font-semibold">Social Media Links</h1>
        <p className="text-white/70">Links for your social media</p>
      </div>
      <div className="flex flex-col gap-4 lg:w-1/2">
        <SocialInput
          URL="facebook.com/"
          placeholder="X_GAGO_A-22"
          value={facebook}
          onChange={onFacebookChange}
        />
        <SocialInput
          URL="twitter.com/"
          placeholder="GAGO_AE_A-22"
          value={twitter}
          onChange={onTwitterChange}
        />
        <SocialInput
          URL="discord.com/"
          placeholder="X_AE_GAGO-22"
          value={discord}
          onChange={onDiscordChange}
        />
        <div className="flex justify-center md:justify-end gap-4">
          <button
            type="button"
            className="flex h-10 w-fit items-center gap-2 px-4 border text-white rounded-full lg:text-sm md:text-sm text-xs font-semibold"
            onClick={() => handleOpenModal("cancel")} // pass modalType
          >
            Cancel
            <X />
          </button>
          <button
            type="button"
            className="flex h-10 w-fit items-center gap-2 px-4 text-white rounded-full bg-blue-700 lg:text-sm md:text-sm text-xs font-semibold"
            onClick={() => handleOpenModal("save")} // pass modalType
          >
            Save Settings
            <Check />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLinksSection;
