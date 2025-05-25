import FileUploader from "../components/FileUploader";

interface Props {
  profilePicture: string;
  profilePictureName: string;
  onProfilePicChange: (value: string) => void;
  onProfilePicNameChange: (value: string) => void;
}

const ProfilePictureSection = ({
  profilePicture,
  profilePictureName,
  onProfilePicChange,
  onProfilePicNameChange,
}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row p-5 gap-4 lg:gap-26 border-b-[0.5px] border-b-white/30">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <h1 className="text-white font-semibold">Profile Picture</h1>
        </div>
        <p className="text-white/70 text-wrap">
          This is where people will see your actual face
        </p>
        <a className="text-blue-600 hover:underline">View Details</a>
      </div>

      <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 min-w-1/2">
        <img
          src={profilePicture}
          alt={profilePictureName || "Profile picture"}
          className="w-20 lg:w-25 h-20 rounded-full border border-white object-cover"
        />
        <FileUploader
          onUpload={(fileUrl, fileName) => {
            onProfilePicChange(fileUrl);
            onProfilePicNameChange(fileName);
          }}
        />
      </div>
    </div>
  );
};

export default ProfilePictureSection;
