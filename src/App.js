import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundError from './components/NotFound/NotFound';
import { Home } from './components/Home';
import Summer from './components/SummerCollection/Summer';
import Layout from './components/Layout';




function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900'>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='summer' element={<Summer />} />
            <Route path='*' element={<NotFoundError />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>    
    );
}





export default App;
