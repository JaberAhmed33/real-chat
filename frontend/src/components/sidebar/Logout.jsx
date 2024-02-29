import { BiLogOut } from "react-icons/bi";
import useLogout from "./../../hooks/useLogout";

export default function Logout() {
  const { logout, loading } = useLogout();
  return (
    <div className="mt-auto">
      {loading ? (
        <span className="loading loading-infinity w-7 pt-1 bg-white"></span>
      ) : (
        <BiLogOut
          className="w-7 h-7 text-white cursor-pointer"
          onClick={logout}
        />
      )}
    </div>
  );
}
