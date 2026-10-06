import { useEffect, useRef, useState } from "react";

const ClickOutside = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showList = useRef();

  const handleClick = (e) => {
    if (!showList.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <div ref={showList}>
        <button onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? "Close Menu" : "Open Menu"}
        </button>

        {showMenu && (
          <ul>
            <li>Menu</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ClickOutside;
