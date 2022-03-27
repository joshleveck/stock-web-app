import { Col, Container, Row } from "react-bootstrap";

import Hero from "./Hero";
import SmallBox from "./SmallBox";
import TickerInfoModal from "../TickerModal/TickerInfoModal";
import SetContent from "./hooks";
import { aaplData } from "../../constants";

const Content = ({ watchlist, handleRemove }) => {
  const {
    showTickerInfo,
    openTickerInfo,
    closeTickerInfo,
    infoTicker,
    setInfoTicker,
  } = SetContent();

  const watchlistVisual = watchlist.map((ticker, i) => (
    <Col
      sm={3}
      key={i}
      onClick={() => {
        openTickerInfo();
        setInfoTicker(ticker);
      }}
    >
      <SmallBox data={aaplData} title={ticker} number="$150.50" />
    </Col>
  ));

  return (
    <Container>
      <TickerInfoModal
        show={showTickerInfo}
        handleRemove={handleRemove}
        handleClose={closeTickerInfo}
        ticker={infoTicker}
      />
      <Row>
        <Hero />
      </Row>
      {watchlist.length !== 0 && (
        <>
          <Row>
            <h2 style={{ margin: 0, fontSize: "1.5em" }}>Watchlist</h2>
          </Row>
          <Row>{watchlistVisual}</Row>
        </>
      )}
    </Container>
  );
};
export default Content;
