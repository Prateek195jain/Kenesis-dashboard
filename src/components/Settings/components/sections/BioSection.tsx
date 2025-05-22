interface Props {
  localBio: string;
  setLocalBio: (value: string) => void;
}

const BioSection = ({ localBio, setLocalBio }: Props) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-16 border-b-[0.5px] border-b-white/30 p-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-white font-semibold">Bio Description</h1>
        <p className="text-white/70">
          This will be your main story, keep it very, very long
        </p>
      </div>
      <textarea
        placeholder="Gago is one and only design system for intelligent, lazy Gen Z people."
        className="bg-[#0b0f23] border border-blue-600 min-w-1/2 min-h-[20vh] outline-0 p-2 rounded-xl text-white"
        value={localBio}
        onChange={(e) => setLocalBio(e.target.value)}
      ></textarea>
    </div>
  );
};

export default BioSection;
