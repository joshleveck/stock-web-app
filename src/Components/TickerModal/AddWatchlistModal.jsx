import { Modal, Button } from "react-bootstrap";
import SetAddWatchlistModal from "./hooks";
import TickerInfo from "./Info";
import Search from "./Search";

const AddWatchlistModal = ({ show, handleAdd, handleClose }) => {
  const {
    value,
    handleChange,
    handleClear,
    isInfoOpen,
    openInfo,
    closeInfo,
    searchedTicker,
    setSearchedTicker,
  } = SetAddWatchlistModal();

  const closeModal = () => {
    handleClear();
    handleClose();
    setSearchedTicker("");
    closeInfo();
  };

  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new ticker to watch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Search
            value={value}
            handleChange={handleChange}
            handleSearch={() => {
              openInfo();
              setSearchedTicker(value);
            }}
          />
          {isInfoOpen && <TickerInfo ticker={searchedTicker} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={() => {
              handleAdd(value);
              closeModal();
            }}
            disabled={value === "" || !isInfoOpen}
          >
            Add to watchlist
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddWatchlistModal;
