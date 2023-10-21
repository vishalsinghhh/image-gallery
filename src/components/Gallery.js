import React, { useState } from "react";
import "../css/Gallery.css";
import like from "../static/like.svg";
import like1 from "../static/like1.svg";
import Modal from "./Modal";
import cross from "../static/cross.svg";
import insta from "../static/instagram.svg";
import twitter from "../static/twitter.svg";
const Gallery = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(user);
  return (
    <div className="gallery">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="modalMain">
          <div className="modalDetails">
            <img
              src={user?.urls.regular}
              alt=""
              style={{ width: "70%" }}
              className="modalImage"
            />
            <div>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                }}
                className="onClose"
              >
                <img src={cross} alt="" />
              </button>
            </div>
            <div className="detailsModal">
              <div className="detailsModalMain">
                <div>
                  <img src={user?.user.profile_image?.medium} alt="" />
                </div>
                <div>{user?.user.name}</div>
                <div>
                  <img src={insta} alt="" /> / {user?.user.instagram_username}
                </div>
                <div>
                  <img src={twitter} alt="" /> / {user?.user.twitter_username}
                </div>
              </div>
            </div>
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
                    <div className="insta">@{item.user?.username}</div>
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
