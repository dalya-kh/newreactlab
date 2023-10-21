import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

import Footer from './pages/Footer'
import Navbar from './pages/Navbar'
import Features from './pages/Features';
import Enterprise from './pages/Enterprise';
import Support from './pages/Support';
import Pricing from './pages/Pricing';


function App() {
  return (
    <>
<Router> 
<Navbar/>

  <Routes>

     <Route path ='features' element={<Features/>}/> 
     <Route path ='enterprise' element={<Enterprise/>}/> 
     <Route path ='support' element={<Support/>}/> 
     <Route index element={<Pricing/>}/> 

      </Routes>
      <Footer/>

      </Router>
    </>
  )
}

export default App