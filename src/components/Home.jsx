import React, {useState} from 'react'
import WelcomePic from '../components/welcome_pic/WelcomePic'
import SlideShow from '../components/SlideShow/SlideShow'
import MidElement from '../components/MidElement/MidElement'
import ButtomElement from '../components/BottomElements/ButtomElement'
import CustomCookiesNotification from './CustomCoockiesNotification/CustomCookiesNotification'


export const Home = () => {
    const [showCookies, setShowCoockies] = useState(true);
  return (
    <div>
    <div className='flex justify-center flex-col'>
      <WelcomePic />
      <SlideShow />
      <MidElement />
      <ButtomElement />
    </div>
    {showCookies && (
          <CustomCookiesNotification
            isVisible={showCookies}
            onClose={() => setShowCoockies(false)}
          />
        )}
  </div>
  )
}
