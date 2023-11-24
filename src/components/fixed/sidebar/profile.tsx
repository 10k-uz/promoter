import { Link, useLocation } from "react-router-dom";
import { ProfileSidebarLinks } from "../../../constants";

const ProfileSideBar = () => {
  const path = useLocation();

  return (
    <div className="px-4 py-4 rounded-md shadow-md rounded-lg grid grid-cols-5 gap-5 bg-white max-md:grid-cols-1">
      {ProfileSidebarLinks.map((items) => {
        const isActive = path.pathname === items.route;

        return (
          <Link
            to={items.route}
            key={items.label}
            className={`flex p-3 gap-2 rounded-lg ${
              !isActive && "hover:bg-gray-100 hover:text-black"
            } ${isActive && "bg-[#9D1F4F] text-white"}`}
          >
            <span>{items.image}</span>
            <span>{items.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default ProfileSideBar;
