import React from 'react';
import './App.css';
import Navbar from './Component/NavBar';
import HeroSection from './Component/HeroSection';
import TableList from './Component/TableList';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <HeroSection />
        <TableList />
        <Footer />
       </>
    </div>
  );
}

export default App;