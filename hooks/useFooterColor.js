import { useContext } from "react";
import { footerColorContext } from "@contexts/footerColor";

export default function useFooterColor() {
  const { footerColor, setFooterColor } = useContext(footerColorContext);
  if (!footerColor) throw new Error("useFooterColor must be used within a FooterColorProvider");
  return { footerColor, setFooterColor };
}
