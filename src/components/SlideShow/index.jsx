import ArrowLeft from '../../assets/ArrowLeft.png'
import ArrowRight from '../../assets/ArrowRight.png'
import React, { useState } from 'react'

function SlideShow({ picture, total }) {
  const [count, setCount] = useState(0)
  const previousPic = () => setCount(count - 1)
  const nextPic = () => setCount(count + 1)
  const firstPic = () => setCount(0)
  const lastPic = () => setCount(total.length - 1)

  return (
    <div className="SlideShowContainer">
      <img
        src={picture[count]}
        alt="Photos propriétés"
        className="SlideShowGallery"
      ></img>
      {total.length > 1 && (
        <div>
          <button
            className="SlideShowButtonL"
            onClick={count === 0 ? lastPic : previousPic}
          >
            <img src={ArrowLeft} alt="Fleche gauche" />
          </button>
          <button
            className="SlideShowButtonR"
            onClick={count === total.length - 1 ? firstPic : nextPic}
          >
            <img src={ArrowRight} alt="Fleche droit" />
          </button>
          <span className="SlideShowCounter">
            {count + 1}/{total.length}
          </span>
        </div>
      )}
    </div>
  )
}

export default SlideShow
