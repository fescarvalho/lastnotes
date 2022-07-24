import { useState, useContext, createContext } from "react";

const HighLighContext = createContext();

export default function HighLighProvider({ children }) {
  const [HighLight, setHighLight] = useState(false);
  return (
    <HighLighContext.Provider value={{ HighLight, setHighLight }}>
      {children}
    </HighLighContext.Provider>
  );
}

export function useHighLight() {
  const context = useContext(HighLighContext);
  const { HighLight, setHighLight } = context;
  return { HighLight, setHighLight };
}
