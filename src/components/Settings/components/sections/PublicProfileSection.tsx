import { User } from "lucide-react";
import SocialInput from "../SocialInput";

interface Props {
  tooltip: string;
  localName: string;
  setLocalName: (value: string) => void;
  localUsername: string;
  setLocalUsername: (value: string) => void;
}

const PublicProfileSection = ({
  tooltip,
  localName,
  setLocalName,
  localUsername,
  setLocalUsername,
}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row p-5 gap-2 lg:gap-10 border-b-[0.5px] border-b-white/30">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <h1 className="text-white font-semibold">Public profile</h1>
          <img src={tooltip} alt="tooltip" />
        </div>
        <p className="text-white/70 text-wrap">
          This is the main profile that will be visible for everyone
        </p>
        <a href="#" className="text-blue-600 hover:underline">
          View Details
        </a>
      </div>

      <div className="flex flex-col gap-3 lg:gap-4 mt-4 lg:w-1/2">
        <div className="flex w-full items-center border border-blue-600 rounded-full bg-[#0b0f23]">
          <span className="p-4 text-white/70">
            <User />
          </span>
          <input
            type="text"
            className="py-4 outline-0 bg-transparent text-white"
            placeholder="Gago Official"
            value={localName}
            onChange={(e) => setLocalName(e.target.value)}
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
  );
};

export default PublicProfileSection;
