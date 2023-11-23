import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full flex min-h-[100vh]">
      <div className="bg-[#9d1f4f14] w-1/2 flex items-center justify-center max-lg:hidden">
        <img
          src={"/assets/auth.png"}
          alt="image not loaded"
          width={558}
          height={558}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 w-1/2 max-lg:w-full max-lg:mx-10">
        <Link to={"/"} className="flex">
          <img
            src="/assets/logo.png"
            width={120}
            height={30}
            alt="Picture of the author"
          />
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
