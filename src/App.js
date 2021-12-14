import './App.css';
import Cards from './Cards';
import Carousel from './Carousel';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Cards image1=""/>
      <Cards />
      <Cards />
    </div>
  );
}

export default App;
