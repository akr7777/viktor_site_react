import s from './App.module.css'
import { ChapterFive_Materials } from './chapters/cahpter5_materials/chapter5-materials'
import { ChapterOne_About_Us } from './chapters/chapter1-about'
import { ChapterTwo_History } from './chapters/chapter2-history'
import { ChapterThree_Activity } from './chapters/chapter3-activity'
import { ChapterFour_Videos } from './chapters/chapter4_videos/chapter4-videos'
import { ChapterSix_Contacts } from './chapters/chapter6_contacts/chapter6-contacts'
import { Chapter } from './common/chapter/chapter'
import MainTitle from './main-title/main-title'
import NavigationMenu from './menu/nav-menu'

function App() {

  return (
    <div className={s.main_wrapped_div}>
      <MainTitle />
      <NavigationMenu />
      <ChapterOne_About_Us />
      <ChapterTwo_History />
      <ChapterThree_Activity />
      <ChapterFour_Videos />
      <ChapterFive_Materials />
      <ChapterSix_Contacts />

      <Chapter chapterTitle={''}>
        <center>
          <p>All rights are reserved</p>
        </center>
      </Chapter>
    </div>
  )
}

export default App
