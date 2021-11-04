import "../style/Gallery.css";
import { useState } from "react";

const GalleryApp = () => {
  // let [picture,setPicture] = useState("")

  // let [modalAction,setModalAction] = useState("")
  const Picture = (props) => {
    return (
      <div className="body-item">
        <img
          src={props.picture}
          alt="pic"
          onClick={() => OpenModal(props.picture)}
        />
      </div>
    );
  };

  const Modal = (props) => {
    return (
      <div className="modal" style={{ display: props.display }}>
        <img src={props.picture} alt="pic" />
        <button onClick={CloseModal}>close</button>
      </div>
    );
  };

  let [display, setDisplay] = useState("none");

  function CloseModal() {
    setDisplay("none");
  }

  function OpenModal(e) {
    setDisplay("flex");
    ClickPic(e);
  }

  let [picture, setPicture] = useState("");

  function ClickPic(p) {
    setPicture(p);
  }

  return (
    <div>
      <div className="gallery-app">
        <div className="gallery-app-container">
          <div className="header-content">
            <div className="header-nav">
              <div>navbar</div>
            </div>

            <div className="header-title">
              <h2>Your Pictures</h2>
              <p>Share your best picture with us</p>
            </div>
          </div>

          <div className="body-content">
            <Picture picture="https://picsum.photos/200?random=1" />
            <Picture picture="https://picsum.photos/200?random=2" />
            <Picture picture="https://picsum.photos/200?random=3" />
            <Picture picture="https://picsum.photos/200?random=4" />
            <Picture picture="https://picsum.photos/200?random=5" />
            <Picture picture="https://picsum.photos/200?random=6" />
            <Picture picture="https://picsum.photos/200?random=7" />
            <Picture picture="https://picsum.photos/200?random=8" />
            <Picture picture="https://picsum.photos/200?random=9" />
          </div>
        </div>
      </div>
      <Modal picture={picture} display={display} />
    </div>
  );
};
export default GalleryApp;
