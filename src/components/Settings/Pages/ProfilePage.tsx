import ProfileDetails from "../components/ProfileDetails";

const ProfilePage = () => {
  return (
    <div className="text-white">
      <div className="px-8 py-4">
        <div className="w-fit">
          <h1>Profile</h1>
          <div className="mt-3 h-[3px] bg-gradient-to-r from-white to-[#0036F6] rounded-full shadow-[0px_0px_45px_10px_rgba(0,54,246,1)]"></div>
        </div>
      </div>
      <ProfileDetails />
    </div>
  );
};

export default ProfilePage;
