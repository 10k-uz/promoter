import { useLocation, Link } from "react-router-dom";
import { HomeSidebarLinks } from "../../constants";

const SideBar = () => {
  const path = useLocation();

  return (
    <div className="px-5 shadow-md w-full bg-white flex justify-between">
      {HomeSidebarLinks.map((item, index) => {
        const isActive =
          (path.pathname.includes(item.route) && item.route.length > 1) ||
          path.pathname === item.route;

        return (
          <Link
            key={index}
            to={item.route}
            className={`flex gap-2 p-3 m-1 ${
              isActive && `bg-[#9D1F4F] rounded-[15px] text-white `
            }`}
          >
            {item.image}
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
