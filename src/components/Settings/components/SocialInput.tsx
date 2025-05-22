interface SocialInputProps {
  URL: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const SocialInput: React.FC<SocialInputProps> = ({
  URL,
  placeholder = "YourUsername",
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center rounded-full border border-blue-600 overflow-hidden bg-[#0b0f23] w-full">
      <span className="bg-blue-600 text-white text-sm px-4 py-4 rounded-l-full whitespace-nowrap">
        {URL}
      </span>

      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent text-white text-sm px-4 py-4 focus:outline-none w-full"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        autoComplete="off"
        aria-label={`${URL} username input`}
      />
    </div>
  );
};

export default SocialInput;
