import { Check, X } from "lucide-react";
import SocialInput from "../SocialInput";

interface Props {
  localFacebook: string;
  setLocalFacebook: (value: string) => void;
  localTwitter: string;
  setLocalTwitter: (value: string) => void;
  localDiscord: string;
  setLocalDiscord: (value: string) => void;
  handleSave: () => void;
  handleCancel: () => void;
}

const SocialLinksSection = ({
  localFacebook,
  setLocalFacebook,
  localTwitter,
  setLocalTwitter,
  localDiscord,
  setLocalDiscord,
  handleSave,
  handleCancel,
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
        <div className="flex justify-center md:justify-end gap-4">
          <button
            className="flex h-10 w-fit items-center gap-2 px-4 border text-white rounded-full lg:text-sm md:text-sm text-xs font-semibold"
            onClick={handleCancel}
          >
            Cancel
            <X />
          </button>
          <button
            className="flex h-10 w-fit items-center gap-2 px-4 text-white rounded-full bg-blue-700 lg:text-sm md:text-sm text-xs font-semibold"
            onClick={handleSave}
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
