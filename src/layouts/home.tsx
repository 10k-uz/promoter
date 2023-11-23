import { Outlet } from "react-router-dom";
import { BottomBar, HomeSideBar } from "../components/fixed";

const HomeLayout = () => {
  return (
    <>
      <div className="flex flex-row w-full">
        <div className="w-[18%] h-auto max-lg:hidden">
          <HomeSideBar />
        </div>
        <div className="flex flex-col w-[82%] gap-4 mx-10 mt-2 max-md:w-full max-lg:w-full max-lg:mx-4">
          <Outlet />
        </div>
      </div>
      <div className="bottom_bar">
        <BottomBar />
      </div>
    </>
  );
};

export default HomeLayout;
