import logo from "./logo.svg";
import "./App.css";
import { CSVLink } from "react-csv";

function App() {
  const data2 = [
    {
      firstName: "zain",
      lastName: "khan",
    },
    {
      firstName: "john",
      lastName: "doe",
    },
  ];
  const data = [
    {
      firstName: "zain",
      lastName: "khan",
    },
    {
      firstName: "john",
      lastName: "doe",
    },
  ];
  const merged = [...data, ...data2]
  const header = [
    {
      label: "First Name",
      key: "firstName",
    },
    {
      label: "Last Name",
      key: "lastName",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CSVLink
          filename={"inventory.csv"}
          target="_blank"
          data={data}
          headers={header}
        >
          <button>Export CSV</button>
        </CSVLink>
      </header>
    </div>
  );
}

export default App;
