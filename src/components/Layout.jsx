import React, { useState } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Modal from "./Modal";
import CustomModalRegister from "./CustomModalView/CustomModalRegister";
import CustomVideoGreeting from "./CustomModalView/CustomVideoGreeting";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className=" overflow-x-hidden">
      <Banner setShowModal={setShowModal} setShowVideo={setShowVideo} />
      <Navbar />
      <Outlet />
      <Footer />
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
};

export default Layout;
