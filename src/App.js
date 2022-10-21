import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Offer from './Components/Offers/Offer'
import Productlist from './Components/Productlist/Productlist';
import Recommendations from './Components/Recommendations/Recommendations';
import Footer from './Components/footer/footer';

function App() {
  return (
    <div>
  <Navigation/>
  <Header/>
  <Offer/>
  <Productlist/>
  <Recommendations/>
<Footer/>
    </div>
  );
}

export default App;
