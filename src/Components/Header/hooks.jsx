import { useState } from "react";

const SetHeader = () => {
  const [show, setShow] = useState(false);

  return {
    show,
    handleClose: () => setShow(false),
    handleShow: () => setShow(true),
  };
};
export default SetHeader;
