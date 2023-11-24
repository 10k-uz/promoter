import { useState } from "react";
import { ProfileToggle } from ".";
import { Link } from "react-router-dom";

const TopBar = ({ name }: { name: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-md shadow-md px-3 py-4 flex justify-between mb-4 max-md:flex max-md:justify-between max-md:items-center">
      <Link to={"/"} className="hidden max-md:flex">
        <img
          src="/assets/logo-responsive.svg"
          width={32}
          height={30}
          alt="Picture of the author"
        />
      </Link>

      <h1 className="font-medium text-[19px] ">{name}</h1>

      <span onClick={() => setIsOpen(!isOpen)}>
        <img
          src={"/assets/default_profil_icon.svg"}
          alt="image not loaded"
          height={32}
          width={30}
          className="self-center cursor-pointer cursor-pointer"
        />
      </span>

      <ProfileToggle isOpen={isOpen} />
    </div>
  );
};

export default TopBar;
