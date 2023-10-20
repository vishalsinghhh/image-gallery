import React from 'react'
import "../css/Gallery.css"

const Gallery = (props) => {
    console.log(props);
  return (
    <div className='gallery'>
    {props?.data?.map((item, i)=>{
        return(
            <div key={i} className='pics'>
            <img src={item.urls.regular} alt="" style={{width:"100%"}} />
            </div>
        )
    })}
    </div>
  )
}

export default Gallery