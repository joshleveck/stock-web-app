import { useState } from "react";

const SetContent = () => {
  const [showTickerInfo, setShowTickerInfo] = useState(false);
  const [infoTicker, setInfoTicker] = useState("");
  return {
    showTickerInfo,
    openTickerInfo: () => setShowTickerInfo(true),
    closeTickerInfo: () => setShowTickerInfo(false),
    infoTicker,
    setInfoTicker,
  };
};
export default SetContent;
