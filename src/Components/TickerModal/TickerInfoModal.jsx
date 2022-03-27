import { Modal, Button } from "react-bootstrap";
import TickerInfo from "./Info";

const TickerInfoModal = ({ show, handleRemove, handleClose, ticker }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ticker Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TickerInfo ticker={ticker} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => {
              handleRemove(ticker);
              handleClose();
            }}
          >
            Remove from watchlist
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default TickerInfoModal;
