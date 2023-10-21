import React, { useState } from "react";
import "../css/Gallery.css";
import like from "../static/like.svg";
import like1 from "../static/like1.svg";
import Modal from "./Modal";
import cross from "../static/cross.svg";
const Gallery = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="gallery">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="modalMain">
          <div className="modalDetails">
            <img src={user?.urls.regular} alt="" style={{ width: "70%" }} />
            {/* <div> */}
              <button
                onClick={() => {
                  setIsModalOpen(false);
                }}
                className="onClose"
              >
                <img src={cross} alt="" />
              </button>
            {/* </div> */}
          </div>
        </div>
      </Modal>
      {props?.data?.map((item, i) => {
        return (
          <div key={i} className="pics">
            {item.urls.regular && (
              <div
                onClick={() => {
                  openModal();
                  setUser(item);
                }}
              >
                <img src={item.urls.regular} alt="" style={{ width: "90%" }} />
                <div
                  className={!props?.light ? "details" : "details detailsDark"}
                >
                  <div>
                    <img src={item.user.profile_image?.medium} alt="" />
                  </div>
                  <div>
                    <div
                      className={
                        !props.light ? "userName" : "userName userNameDark"
                      }
                    >
                      {item.user?.name}
                    </div>
                    <div className="insta">
                      @{item.user?.instagram_username}
                    </div>
                  </div>
                  <div className="like">
                    <img src={!props.light ? like1 : like} alt="" />
                    <div>{item.likes}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
