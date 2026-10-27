import { useState } from "react";
import ShopLayout from "../components/ShopLayout";
import { ShopUserContext } from "../context/ShopUserContext";

const initial_user = {
  name: "Kunal",
};

const ShopApp = () => {
  const [user, setUser] = useState(initial_user);

  return (
    <div>
      <ShopUserContext.Provider value={{ user, setUser }}>
        <ShopLayout />
      </ShopUserContext.Provider>
    </div>
  );
};

export default ShopApp;
