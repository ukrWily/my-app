import "./App.css";

function WhoAmI({ name, surname, link }) {
  return (
    <div className="">
      <h1>
        My name is {name}, surname - {surname}
      </h1>
      <a href={link}>My profile</a>
    </div>
  );
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
