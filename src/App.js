import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import WelcomePic from './components/welcome_pic/WelcomePic';
import Modal from './components/Modal';
import CustomModalRegister from './components/CustomModalView/CustomModalRegister';
import CustomVideoGreeting from './components/CustomModalView/CustomVideoGreeting';
import SlideShow from './components/SlideShow/SlideShow';
import MidElement from './components/MidElement/MidElement';
import CustomCookiesNotification from './components/CustomCoockiesNotification/CustomCookiesNotification';
import ButtomElement from './components/BottomElements/ButtomElement';
import { BrowserRouter } from 'react-browser-router';





function App() {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showCookies, setShowCoockies] = useState(true);




  return (
    <BrowserRouter>
      <div className='min-h-screen bg-white'>
        
        <div>
          <div>
            <Banner setShowModal={setShowModal} setShowVideo={setShowVideo} />
            <Navbar />
          </div>
          <div>
            <div className='flex justify-center flex-col'>
              <WelcomePic />
              <SlideShow />
              <MidElement />
              <ButtomElement />
            </div>
          </div>


        </div>
        {showModal && (
          <Modal
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            children={<CustomModalRegister />}
          />
        )}
        {showVideo && (
          <Modal
            isVisible={showVideo}
            onClose={() => setShowVideo(false)}
            children={<CustomVideoGreeting />}

          />
        )}
        {showCookies && (
          <CustomCookiesNotification
            isVisible={showCookies}
            onClose={() => setShowCoockies(false)}
          />
        )}


      </div>
    </BrowserRouter>

  );
}

export default App;
