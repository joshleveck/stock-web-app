import { useState } from "react";

const SetDefaultLayout = () => {
  const [watchlist, setWatchlist] = useState([]);
  return {
    watchlist,
    handleAdd: (ticker) => {
      setWatchlist([...watchlist, ticker]);
    },
    handleRemove: (ticker) => {
      setWatchlist(watchlist.filter((t) => t !== ticker));
    },
  };
};
export default SetDefaultLayout;
