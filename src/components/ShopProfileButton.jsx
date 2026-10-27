import { useContext } from "react";
import { ShopUserContext } from "../context/ShopUserContext";

const ShopProfileButton = () => {
  const { user, setUser } = useContext(ShopUserContext);

  return (
    <div>
      <div>
        <button
          onClick={() =>
            user.name === "Kunal"
              ? setUser({ name: "Alex" })
              : setUser({ name: "Kunal" })
          }
        >
          {user.name}
        </button>
      </div>
    </div>
  );
};

export default ShopProfileButton;
