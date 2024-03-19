import s from './App.module.css'
import { ChapterFive_Materials } from './chapters/cahpter5_materials/chapter5-materials'
import { ChapterOne_About_Us } from './chapters/chapter1-about'
import { ChapterTwo_History } from './chapters/chapter2-history'
import { ChapterThree_Activity } from './chapters/chapter3-activity'
import OurEvents from './chapters/chapter31-events/chapter-events'
import { ChapterFour_Videos } from './chapters/chapter4_videos/chapter4-videos'
import { ChapterSix_Contacts } from './chapters/chapter6_contacts/chapter6-contacts'
import MyFooter from './common/footer/footer'
import BigPhoto from './common/photo/big-photo'
import { FULL_NAV_SCREEN_SIZE } from './consts/store-consts'
import MainTitle from './main-title/main-title'
import NavigationMenuDesctop from './menu/nav-menu-desctop'
import NavigationMenuMobile from './menu/nav-menu-mobile'
import useScreenSize from './store/useScreenSize-hook'

function App() {
  const screenSize = useScreenSize()

  const navigationMenuElement = screenSize.width > FULL_NAV_SCREEN_SIZE
    ? <NavigationMenuDesctop />
    : <NavigationMenuMobile />

  return (
    <div className={s.main_wrapped_div}>

      <BigPhoto />

      <MainTitle />
      {/* <NavigationMenuDesctop /> */}

      {navigationMenuElement}

      <ChapterOne_About_Us />
      <ChapterTwo_History />
      <ChapterThree_Activity />
      <OurEvents />
      <ChapterFour_Videos />
      <ChapterFive_Materials />
      <ChapterSix_Contacts />

      {/* <Chapter chapterTitle={''}>
        <center>
          <p>All rights are reserved</p>
        </center>
      </Chapter> */}
      <MyFooter />
    </div>
  )
}

export default App
