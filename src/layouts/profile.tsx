import { Outlet } from "react-router-dom";
import { TopBar } from "../components/fixed";
import { ProfileSideBar } from "../components/fixed/";

const ProfileLayout = () => {
  return (
    <>
      <TopBar name="Profile" />
      <div className="flex flex-col w-full">
        <ProfileSideBar />
        <Outlet />
      </div>
    </>
  );
};

export default ProfileLayout;
