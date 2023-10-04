import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';

import TravelCard from './components/Card';
function App() {
  return (
    <div>
      <Nav />
      <section>
        <TravelCard />
      </section>
    </div>
  );
}

export default App;
