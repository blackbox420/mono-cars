import { observer } from "mobx-react";
import { createContext } from "react";
import { CarsStore } from "../stores/carsStore";

const contextValue = {
  carsStore: new CarsStore(),
};

export const StoresContext = createContext(contextValue);

export const StoresProvider = observer(({ children }) => {
  return (
    <StoresContext.Provider value={contextValue}>
      {children}
    </StoresContext.Provider>
  );
});
