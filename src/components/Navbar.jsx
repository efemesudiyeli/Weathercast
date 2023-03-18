import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="container mx-auto sticky top-0 z-50">
      <div className="navbar bg-base-100 justify-center ">
        <div className="navbar-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Anasayfa</NavLink>
              </li>

              <li>
                <NavLink to={"/forecasts"}>Tahminler</NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="btn btn-ghost normal-case text-xl" to={"/"}>
            Weathercast
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Anasayfa</NavLink>
            </li>

            <li>
              <NavLink to={"/forecasts"}>Tahminler</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="form-control mr-5">
            <div className="input-group">
              <input
                disabled
                type="text"
                placeholder="coming soon..."
                className="input input-bordered"
              />
              <button disabled className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <NavLink
            target={"_blank"}
            to={"https://www.github.com/efemesudiyeli"}
            className="btn"
          >
            Github
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
