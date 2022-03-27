import { useState } from "react";

const SetAddWatchlistModal = () => {
  const [value, setValue] = useState("");
  const [isInfoOpen, setInfo] = useState(false);
  const [searchedTicker, setSearchedTicker] = useState(false);
  return {
    value,
    handleChange: (event) => {
      console.log(value);
      setValue(event.target.value);
    },
    handleClear: () => setValue(""),
    isInfoOpen,
    openInfo: () => setInfo(true),
    closeInfo: () => setInfo(false),
    searchedTicker,
    setSearchedTicker,
  };
};
export default SetAddWatchlistModal;
