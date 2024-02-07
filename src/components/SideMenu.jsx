
import { Link } from "react-router-dom";
function SideMenu() {
  return (
    <div className="bg-gray-800 h-screen w-52 flex flex-col justify-between sticky top-0">
      <div className="p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 block py-2 px-4"
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link to="/myclaims">
              {" "}
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 block py-2 px-4"
              >
                My Claims
              </a>
            </Link>
          </li>
          <li>
            <Link to="/claims">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 block py-2 px-4"
              >
                New Claims
              </a>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 block py-2 px-4"
              >
                Profile
              </a>
            </Link>
          </li>
          <li>
            <Link to="/user">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 block py-2 px-4"
              >
                Policy By
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-4"></div>
    </div>
  );
}

export default SideMenu;
