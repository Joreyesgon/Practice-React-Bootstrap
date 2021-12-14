import './App.css';
import Cards from './Cards';
import Carousel from './Carousel';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Cards image1="https://via.placeholder.com/100" image2="https://via.placeholder.com/130" image3="https://via.placeholder.com/150" cardTitle1="Hey" cardTitle2="Hi" cardTitle3="Hello" footerText1="Last updated 3 mins ago" footerText2="Last updated 2 mins ago" footerText3="Last updated 1 mins ago" cardText1="This is a wider card with supporting text below as a natural lead-in to additional content." cardText2="This card has even longer content than the first to show that equal height action." cardText3="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."/>
      <Cards image1="https://via.placeholder.com/150" image2="https://via.placeholder.com/100" image3="https://via.placeholder.com/130" cardTitle1="Hello" cardTitle2="Hey" cardTitle3="Hi" footerText1="Last updated 1 mins ago" footerText2="Last updated 3 mins ago" footerText3="Last updated 2 mins ago" cardText1="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action." cardText2="This is a wider card with supporting text below as a natural lead-in to additional content." cardText3="This card has even longer content than the first to show that equal height action."/>
      <Cards image1="https://via.placeholder.com/130" image2="https://via.placeholder.com/150" image3="https://via.placeholder.com/100" cardTitle1="Hi" cardTitle2="Hello" cardTitle3=" Hey" footerText1="Last updated 2 mins ago" footerText2="Last updated 1 mins ago" footerText3="Last updated 3 mins ago" cardText1="This card has even longer content than the first to show that equal height action." cardText2="This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action." cardText3="This is a wider card with supporting text below as a natural lead-in to additional content."/>
    </div>
  );
}

export default App;
