import ArrowLeft from '../../assets/ArrowLeft.png'
import ArrowRight from '../../assets/ArrowRight.png'
import React, { useState } from 'react'

function SlideShow({ picture, total }) {
  const [count, setCount] = useState(0)
  const previousPic = () => setCount(count - 1)
  const nextPic = () => setCount(count + 1)

  return (
    <div className="SlideShowContainer">
      <img
        src={picture[count]}
        alt="Photos propriétés"
        className="SlideShowGallery"
      ></img>
      <button className="SlideShowButtonL" onClick={count >= 1 && previousPic}>
        <img src={ArrowLeft} alt="Fleche gauche" />
      </button>
      <button className="SlideShowButtonR" onClick={nextPic}>
        <img src={ArrowRight} alt="Fleche droit" />
      </button>
      <span className="SlideShowCounter">
        {count + 1}/{total}
      </span>
      {console.log(count)}
    </div>
  )
}

export default SlideShow
