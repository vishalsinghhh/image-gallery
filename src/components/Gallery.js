import React from "react";
import "../css/Gallery.css";
import like from "../static/like.svg";

const Gallery = (props) => {
  // console.log(props?.data[0]?.user?.name);
  return (
    <div className="gallery">
      {props?.data?.map((item, i) => {
        return (
          <div key={i} className="pics">
            {item.urls.regular && (
              <div>
                <img src={item.urls.regular} alt="" style={{ width: "90%" }} />
                <div className="details">
                  <div>
                    <img src={item.user.profile_image?.medium} alt="" />
                  </div>
                  <div>
                    <div className="userName">{item.user?.name}</div>
                    <div className="insta">{item.user?.instagram_username}</div>
                  </div>
                  <div className="like">
                    <img src={like} alt="" />
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
