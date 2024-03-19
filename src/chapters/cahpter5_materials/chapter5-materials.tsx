import { Chapter } from "../../common/chapter/chapter"
import { CHAPTER_ID_NAMES } from "../../consts/chapter-id-names"
import { MaterialCard } from "./material-card"
import link1 from '../../assets/docs/4.pdf'
import link2 from '../../assets/docs/1.pdf'
import link3 from '../../assets/docs/2.pdf'
import link4 from '../../assets/docs/3.pdf'
import photo11 from '../../assets/docs/4.png'
import photo12 from '../../assets/docs/4c.png'
import photo21 from '../../assets/docs/1.png'
import photo22 from '../../assets/docs/1c.png'
import photo31 from '../../assets/docs/2.png'
import photo32 from '../../assets/docs/2c.png'
import photo41 from '../../assets/docs/3.png'
import photo42 from '../../assets/docs/3c.png'

export const ChapterFive_Materials = () => {

    return (
        <Chapter chapterTitle={"Материалы"} chapterId={CHAPTER_ID_NAMES.materials}>
             <div className="materials_div">

                <MaterialCard 
                  link={link1} 
                  author={"В.А. Спиридонов"} 
                  title={"Руководство самозащиты по системе джиу-джитсу"}
                  photo1={photo11}
                  photo2={photo12} 
                />

                {/* <div class="material_card">
                  <a href="assets/docs/4.pdf">
                    <div class="m1"></div>
                    <!-- <img src="assets/docs/4.png" alt="В.А. Спиридонов - Руководство самозащиты по системе джиу-джитсу"> -->
                  </a>
                  <h4>В.А. Спиридонов</h4>
                  <h5>Руководство самозащиты<br>по системе джиу-джитсу</h5>
                  <a href="assets/docs/4.pdf"><button>Скачать</button></a>
                </div> */}

                <MaterialCard 
                  link={link2} 
                  author={"В.А. Спиридонов"} 
                  title={"Самозащита без оружия."} 
                  photo1={photo21}
                  photo2={photo22}
                />

                {/* <div class="material_card">
                  <a href="assets/docs/1.pdf">
                    <div class="m2"></div>
                    <!-- <img src="assets/docs/1.png" alt="В.А. Спиридонов - Самозащита без оружия"> -->
                  </a>
                  <h4>В.А. Спиридонов</h4>
                  <h5>Самозащита без оружия.</h5>
                  <a href="assets/docs/1.pdf"><button>Скачать</button></a>
                </div> */}

                <MaterialCard 
                  link={link3} 
                  author={"В.П. Волков"} 
                  title={'Курс самозащиты без оружия "САМБО"'} 
                  photo1={photo31}
                  photo2={photo32}
                />

                {/* <div class="material_card">
                  <a href="assets/docs/2.pdf">
                    <div class="m3"></div>
                    <!-- <img src="assets/docs/2.png" alt="В.П. Волков - Курс самозащиты без оружия САМБО"> -->
                  </a>
                  <h4>В.П. Волков</h4>
                  <h5>Курс самозащиты без <br>оружия "САМБО"</h5>
                  <a href="assets/docs/2.pdf"><button>Скачать</button></a>
                </div> */}

                <MaterialCard 
                  link={link4} 
                  author={"А.А. Харлампиев"} 
                  title={"Самбо. Специальные приемы."} 
                  photo1={photo41}
                  photo2={photo42}
                />

                {/* <div class="material_card">
                  <a href="assets/docs/3.pdf">
                    <div class="m4"></div>
                    <!-- <img src="assets/docs/3.png" alt="А.А. Харлампиев - Самбо. Специальные приемы"> -->
                  </a>
                  <h4>А.А. Харлампиев</h4>
                  <h5>Самбо. Специальные приемы.</h5>
                  <a href="assets/docs/3.pdf"><button>Скачать</button></a>
                </div> */}
            </div>
        </Chapter>
    )
}