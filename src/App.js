import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          items: data,
          isLoading: false,
        })
      );
  }

  render() {
    const { items, isLoading } = this.state;

    if (isLoading) {
      return <p> Loading........ </p>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ol>
            {" "}
            {items.map((item, index) => (
              <li key={index}>
                Nama: {item.name} <br />
                Username: {item.username} <br />
                Alamat: {item.address.street}{" "}
              </li>
            ))}{" "}
          </ol>{" "}
        </header>{" "}
      </div>
    );
  }
}

export default App;
