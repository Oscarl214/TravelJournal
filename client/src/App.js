import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';

import Card from './components/Card';

import travelData from './data';

function App() {
  let displayCard = travelData.map((country) => {
    return <Card key={country.id} countryInfo={country} />;
  });

  return (
    <div>
      <Nav />
      <section>{displayCard}</section>
    </div>
  );
}

export default App;
