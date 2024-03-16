import './main-title.scss'
import photo1 from '../assets/images/title-photos/photo_1.jpg'
import photo2 from '../assets/images/title-photos/photo_2.jpg'
import photo3 from '../assets/images/title-photos/photo_3.jpg'
import photo4 from '../assets/images/title-photos/photo_4.jpg'
import photo5 from '../assets/images/title-photos/photo_5.jpg'
import arrowImg from '../assets/icons/arrow1.png'
import logoVA from '../assets/images/logo.jpg'
import spiridon1 from '../assets/images/va1.png'
import spiridon2 from '../assets/images/spiridonov.png'
import { useState } from 'react'
import { CHAPTER_ID_NAMES } from '../consts/chapter-id-names'

const MainTitle = () => {
  const [photoHero, setPhotoHero] = useState(spiridon1)

    return (
      <div className="first_div" id={CHAPTER_ID_NAMES.main_title}>

        <div className="line1">
          <div className="square1">
            <p>Клуб<br/>"Спиридонов"</p>
            <img className="img_club_logo" src={logoVA} onclick="openImage('overlay_logo')"></img>
            <div className="overlay_logo" id="overlay_logo" onclick="closeImage('overlay_logo')"></div>

          </div>
          <div className="square2">
            <img src={photoHero} alt={""} 
              className='square2_spiridon_photo'
              onMouseOver={() => setPhotoHero(spiridon2)}
              onMouseLeave={() => setPhotoHero(spiridon1)}
            />
          </div>
        </div>

        <div className="line2">
          <div className="line2_inside">

            <img src={photo1} onclick="openImage('overlay_carusel_1')"/>
            <div className="overlay_carusel_1" id="overlay_carusel_1" onclick="closeImage('overlay_carusel_1')"></div>

            <img src={photo2} onclick="openImage('overlay_carusel_2')"/>
            <div className="overlay_carusel_2" id="overlay_carusel_2" onclick="closeImage('overlay_carusel_2')"></div>

            <img src={photo3} onclick="openImage('overlay_carusel_3')"/>
            <div className="overlay_carusel_3" id="overlay_carusel_3" onclick="closeImage('overlay_carusel_3')"></div>

            <img src={photo4} onclick="openImage('overlay_carusel_4')"/>
            <div className="overlay_carusel_4" id="overlay_carusel_4" onclick="closeImage('overlay_carusel_4')"></div>

            <img src={photo5} onclick="openImage('overlay_carusel_5')"/>
            <div className="overlay_carusel_5" id="overlay_carusel_5" onclick="closeImage('overlay_carusel_5')"></div>

          </div>
        </div>

        <div className="arrow_div">
          <a href={"#" + CHAPTER_ID_NAMES.navigation_menu}>
            <img src={arrowImg}/>
          </a>
        </div>

      </div>
    )
}

export default MainTitle