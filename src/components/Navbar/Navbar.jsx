import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const gymRoutes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about" },
    { id: 3, name: "Programs", path: "/programs" },
    { id: 4, name: "Membership", path: "/membership" },
    { id: 5, name: "Contact Us", path: "/contact" },
  ];

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const items = (
    <ul className="md:flex justify-around items-center text-center p-2 m-5 rounded-4xl bg-amber-800">
      {gymRoutes.map((route) => (
        <li key={route.id} className="m-5">
          <a
            className="bg-cyan-800 p-2 rounded-2xl text-white hover:bg-cyan-700"
            href={route.path}
          >
            {route.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
    <div className="m-5 md:hidden">
      <button onClick={() => handleMenu()}>
        {menu ? (
          <ImCross className="text-3xl" /> && items
        ) : (
          <HiOutlineMenuAlt1 className="text-3xl" />
        )}
      </button>
    </div>
    <div className="hidden md:block">
        {items}
    </div>
    </div>
  );
};

export default Navbar;
