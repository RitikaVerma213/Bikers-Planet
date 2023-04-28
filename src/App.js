import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Events from './Pages/Event/Events';
import Footer from './Components/Footer';
import Chandigarh from './Components/CHANDIGARH/Chandigarh';
import Shimla from './Components/SHIMLA/Shimla';
import Manali from './Components/MANALI/Manali';
import Mumbai from './Components/MUMBAI/Mumbai';
import Goa from './Components/RFC GOA/Goa';
import Bangalore from './Components/BANGALORE/Bangalore';
import FAQs from './Pages/FAQs/FAQs';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/Chandigarh" element={<Chandigarh/>}/>
          <Route path="/Shimla" element={<Shimla/>}/>
          <Route path="/Manali" element={<Manali/>}/>
          <Route path="/Mumbai" element={<Mumbai/>}/>
          <Route path="/Goa" element={<Goa/>}/>
          <Route path="/Bangalore" element={<Bangalore/>}/>
          <Route path="/FAQs" element={<FAQs/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>  
  );
}

export default App;
