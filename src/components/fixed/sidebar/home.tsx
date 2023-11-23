import { useLocation, Link } from "react-router-dom";
import { HomeSidebarLinks } from "../../../constants";

const HomeSideBar = () => {
  const path = useLocation();

  return (
    <div className="w-[18%] fixed px-5 shadow-lg min-h-[100vh] h-full overflow-y-auto bg-white flex flex-col">
      <Link to={"/"} className="p-2 mt-3 flex gap-2">
        <img
          src="/assets/logo-responsive.svg"
          width={40}
          height={30}
          alt="Picture of the author"
        />
        <span className="self-center text-[24px]  text-[#9D1F4F] font-semibold">
          10k.uz
        </span>
      </Link>

      <div className="mt-5">
        {HomeSidebarLinks.map((item, index) => {
          const isActive = path.pathname === item.route;

          return (
            <Link
              key={index}
              to={item.route}
              className={`flex gap-2 p-3 m-1 ${
                !isActive && "hover:bg-gray-100 rounded-[15px] "
              } ${isActive && `bg-[#9D1F4F] rounded-[15px] text-white`}`}
            >
              {item.image}
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSideBar;
