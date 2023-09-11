import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-rose-400 to-orange-300'>
      <Banner/>
      <Navbar/>
    </div>
  );
}

export default App;
