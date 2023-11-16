import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundError from './components/NotFound/NotFound';
import { Home } from './components/Home';
import Summer from './components/SummerCollection/Summer';
import Layout from './components/Layout';
import TrackMyOrder from './components/FooterElements/TrackMyOrder';
import MyAccount from './components/FooterElements/MyAccount';




function App() {
    return (
    <BrowserRouter>
      <div className='min-h-screen bg-slate-50'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/alenasbrand' element={<Home/>}/>
            <Route path='summer' element={<Summer />} />
            <Route path='*' element={<NotFoundError />} />
            <Route path='trackmyorder' element={<TrackMyOrder/>}/>
            <Route path='myaccount' element={<MyAccount/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}





export default App;
