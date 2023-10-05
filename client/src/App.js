import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';

import Card from './components/Card';

// import travelData from './data';
import GalleryPage from './components/GalleryPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // let displayCard = travelData.map((country) => {
  //   return <Card key={country.id} countryInfo={country} />;
  // });

  return (
    <div>
      {/* {displayCard} */}
      <Router>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/gallery/:id" element={<GalleryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
