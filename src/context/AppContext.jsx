import { createContext, useState } from "react";

export const AppContext = createContext();

const AppState = (props) => {
  const [user, setUser] = useState(null);
  const [ans, setAns] = useState(null);
  const store = {
    user,
    setUser,
    ans,
    setAns,
  };
  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};

export default AppState;
