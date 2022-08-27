import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main';
import Gallery from './components/Gallery/Gallery';
import Gallery1 from './components/Gallery1/Gallery1';
import Gallery2 from './components/Gallery2/Gallery2';
import About from './components/About/About';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from './components/Header/web3React';

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <div className="App" id='App'>
          <Header />
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/membership' element={<Gallery />} />
            <Route exact path='/gallery1' element={<Gallery1 />} />
            <Route exact path='/gallery2' element={<Gallery2 />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Web3ReactProvider>
  )
}



export default App;
