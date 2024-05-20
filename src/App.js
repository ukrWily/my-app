import { Component } from "react";

import "./App.css";

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "+++",
      position: "",
    };
  }

  nextYear = () => {
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  commitInputChanges = (e) => {
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;
    return (
      <div className="">
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          My name is {name}, surname - {surname}, age - {years} years, position
          - {position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введіть посаду</span>
          <input type="text" onChange={this.commitInputChanges} />
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Mark" surname="Donovan" link="twitter.com" />
    </div>
  );
}

export default App;

// ({ name, surname, link })
