import { CHAPTER_ID_NAMES } from '../consts/chapter-id-names'
import './menu.scss'

const NavigationMenu = () => {
    return (
      <div className="navigation_menu" id={CHAPTER_ID_NAMES.navigation_menu}>
        <a href={"#" + CHAPTER_ID_NAMES.about} className="nav_link">О нас</a>
        <a href={"#" + CHAPTER_ID_NAMES.history} className="nav_link">История</a>
        <a href={"#" + CHAPTER_ID_NAMES.our_activity} className="nav_link"><div>Деятельность</div></a>
        <a href={"#" + CHAPTER_ID_NAMES.our_events} className="nav_link"><div>Мероприятия</div></a>
        <a href={"#" + CHAPTER_ID_NAMES.video} className="nav_link"><div>Видео</div></a>
        <a href={"#" + CHAPTER_ID_NAMES.materials} className="nav_link"><div>Материалы</div></a>
        <a href={"#" + CHAPTER_ID_NAMES.contacts} className="nav_link"><div>Контакты</div></a>
      </div>
    )
}

export default NavigationMenu