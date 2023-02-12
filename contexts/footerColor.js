import { createContext, useCallback, useState } from "react";

export const footerColorContext = createContext();

export function FooterColorProvider({ children }) {
  const [color, setColor] = useState("white");

  const setFooterColor = useCallback(setColor, []);

  return <footerColorContext.Provider value={{ footerColor: color, setFooterColor }}>{children}</footerColorContext.Provider>;
}
