import { CHAPTER_ID_NAMES } from '../consts/chapter-id-names'
import { MENU_POINTS_LIST } from './menu-points'
import './nav-menu-desctop.scss'
import {v4 as uuidv4} from 'uuid'

const NavigationMenuDesctop = () => {
    return (
      <div className="navigation_menu" id={CHAPTER_ID_NAMES.navigation_menu}>
        {MENU_POINTS_LIST.map(el => {
          return (
            <a href={el.link} className='nav_link_desctop' key={uuidv4()} >{el.title}</a>
          )
        })}
      </div>
    )
}

export default NavigationMenuDesctop