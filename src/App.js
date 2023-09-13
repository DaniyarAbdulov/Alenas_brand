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


function App() {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className='min-h-screen bg-white'>

      <Banner setShowModal={setShowModal} setShowVideo={setShowVideo}
      />
      <Navbar />
      <div className='flex justify-center flex-col'>
        <WelcomePic />
        <SlideShow />
        <MidElement />


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
    </div>
  );
}

export default App;
