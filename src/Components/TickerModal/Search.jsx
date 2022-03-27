import { Button } from "react-bootstrap";

const Search = ({ value, handleChange, handleSearch }) => (
  <label>
    Ticker:
    <input
      type="text"
      value={value}
      onChange={handleChange}
      style={{ marginLeft: "10px" }}
    />
    <Button
      variant="outline-primary"
      style={{ marginLeft: "10px", marginTop: "-5px" }}
      onClick={handleSearch}
    >
      Search
    </Button>
  </label>
);
export default Search;
