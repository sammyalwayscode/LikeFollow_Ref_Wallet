import { createContext, PropsWithChildren, useState } from "react";

type ToggleSet = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  //   toggleHandler:boolean
};

export const UserContent = createContext<ToggleSet | false>(false);

export const GlobalUser: React.FC<PropsWithChildren> = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  //   const toggleHandler = () => {
  //     setToggle(!toggle)
  //   }

  return (
    <UserContent.Provider value={{ toggle, setToggle }}>
      {children}
    </UserContent.Provider>
  );
};
