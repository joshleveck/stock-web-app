import React from "react";
import Content from "../Components/Content/Content";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar";
import SetDefaultLayout from "./hooks";

const DefaultLayout = () => {
  const { watchlist, handleAdd, handleRemove } = SetDefaultLayout();
  console.log(watchlist);
  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: "270px" }}>
        <Header handleAdd={handleAdd} />
        <Content watchlist={watchlist} handleRemove={handleRemove} />
      </div>
    </div>
  );
};

export default DefaultLayout;
