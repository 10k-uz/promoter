import { Link, useNavigate } from "react-router-dom";

interface badgeType {
  isOpen: boolean;
}

const ProfileToggle = ({ isOpen }: badgeType) => {
  if (!isOpen) return null;
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  return (
    <>
      <div className="fixed border top-[80px] right-[40px] flex flex-col gap-1 rounded-md bg-white shadow-2xl w-[150px] p-2 max-md:top-[60px] max-md:right-[30px]">
        <Link to={"/profile"} className="hover:bg-gray-100 p-1">
          Profile
        </Link>
        <span
          onClick={onLogout}
          className="text-red-500 p-1 hover:bg-red-50 cursor-pointer"
        >
          Chiqish
        </span>
      </div>
    </>
  );
};

export default ProfileToggle;
