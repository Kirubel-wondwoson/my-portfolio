import Layout from './components/Layout/layout'
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='About' element={<About />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='Portfolio' element={<Portfolio />} />
            <Route path='Services' element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
