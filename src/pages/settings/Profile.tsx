import { ProfileForm } from "../../forms";

const Profile = () => {
  return (
    <div className="flex flex-col gap-4 mt-5">
      <h1 className="text-2xl font-semibold">Shaxsiy Ma'lumotlar</h1>
      <ProfileForm />
    </div>
  );
};

export default Profile;
