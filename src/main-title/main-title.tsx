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
import { useAppDispatch } from '../store/store'
import { changeBigPhotoSrcAC } from '../store/appSlice'
import { v4 as uuidv4 } from 'uuid'
// import useScreenSize from '../store/useScreenSize-hook'

const MainTitle = () => {
  const dispatch = useAppDispatch()
  const [photoHero, setPhotoHero] = useState(spiridon1)
  const photoCaruselList: Array<string> = [photo1, photo2, photo3, photo4, photo5]

  // const screenSize = useScreenSize()
  // console.log('screenSize=', screenSize);
  

  const onPhotoClickHandler = (imgSrc: string) => {
    dispatch(changeBigPhotoSrcAC(imgSrc))
  }

    return (
      <div className="first_div" id={CHAPTER_ID_NAMES.main_title}>

        <div className="line1">
          <div className="square1">
            <p>Клуб<br/>"Спиридонов"</p>
            <img className="img_club_logo" src={logoVA} onClick={() => onPhotoClickHandler(logoVA)}></img>
            {/* <div className="overlay_logo" id="overlay_logo" onclick="closeImage('overlay_logo')"></div> */}

          </div>
          <div className="square2">
            <img src={photoHero} alt={""} 
              className='square2_spiridon_photo'
              onMouseOver={() => setPhotoHero(spiridon2)}
              onMouseLeave={() => setPhotoHero(spiridon1)}
              onClick={() => onPhotoClickHandler(spiridon2)}
            />
          </div>
        </div>

        <div className="line2">
          <div className="line2_inside">

            {
              photoCaruselList.map(p => {
                return (
                  <img src={p} onClick={() => onPhotoClickHandler(p)} key={uuidv4()}/>
                )
              })
            }

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