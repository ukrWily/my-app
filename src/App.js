import { Component, Fragment } from "react";
import styled from "styled-components";

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

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;
    return (
      <Fragment>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          My name is {name}, surname - {surname}, age - {years} years, position
          - {position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введіть посаду</span>
          <input
            type="text"
            onChange={(e) => this.commitInputChanges(e, "some color")}
          />
        </form>
      </Fragment>
    );
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Mark" surname="Donovan" link="twitter.com" />
    </Wrapper>
  );
}

export default App;

// ({ name, surname, link })
