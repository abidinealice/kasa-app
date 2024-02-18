import Example from '../../assets/Example.png'
import ArrowLeft from '../../assets/ArrowLeft.png'
import ArrowRight from '../../assets/ArrowRight.png'

function SlideShow() {
  return (
    <div className="SlideShowContainer">
      <img src={Example} alt="example" className="SlideShowCar"></img>
      <button className="SlideShowButtonL">
        <img src={ArrowLeft} alt="Fleche gauche" />
      </button>
      <button className="SlideShowButtonR">
        <img src={ArrowRight} alt="Fleche droit" />
      </button>
      <span className="SlideShowCounter">1/4</span>
    </div>
  )
}

export default SlideShow
