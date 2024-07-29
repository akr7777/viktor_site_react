import { Chapter } from "../common/chapter/chapter"
import { ParagraphWithImage } from "../common/paragraph/paragraph"
import img1 from '../assets/images/group_photo_1.jpg'
import img2 from '../assets/images/content-photos/historical/history_photo_14.jpg'
import img3 from '../assets/images/content-photos/historical/history_photo_13.jpg'
import img4 from '../assets/images/content-photos/historical/history_photo_12.jpg'

import { CHAPTER_ID_NAMES } from "../consts/chapter-id-names"

const historyText1: string = `Создателем Советской методики рукопашного боя является Виктор Афанасьевич Спиридонов (20/12/1872 г. - 07/09/1944 г.), в прошлом офицер царской армии, участник Русско-японской и Первой Мировой войн. Учредитель спортивного общества "Динамо".`

const historyText2: string = `Спиридонов не только создал систему приемов для органов Рабоче-Крестьянской милиции, ОГПУ, НКВД, основываясь на японском дзю-дзюцу, североамериканской борьбе, французском Савате, английском боксе, но и разработал свою уникальную, в корне отличающуюся от существующих, советскую методику в подготовке к рукопашной борьбе (Метод фазисной тренировки).`

const historyText3: string = `В годы Великой Отечественной войны Спиридонов, будучи инвалидом первой группы подготавливал бойцов ОМСБОН НКВД СССР для боевой работы в тылу врага.

Свою борьбу Спиридонов назвал САМОЗ. Она даёт возможность ослабленному победить сильного, безоружному – вооруженного, малым числом - превосходящую силу.`

const historyText4: string = `Система Спиридонова является культурным наследием Советской Эпохи и изучается в клубе «Спиридонов», как народное культурное достояние и часть нашей истории, способствует воспитанию всесторонне многогранной развитой личности.`


export const ChapterTwo_History = () => {
    return (
        <Chapter 
            chapterTitle={"Немного истории"} 
            chapterId={CHAPTER_ID_NAMES.history}
        >
            <ParagraphWithImage 
                text={historyText1} 
                image={img1} 
                imagePosition={"LEFT"} 
            />

            <ParagraphWithImage 
                text={historyText2} 
                image={img2} 
                imagePosition={"RIGHT"} 
            />

            <ParagraphWithImage 
                text={historyText3} 
                image={img3} 
                imagePosition={"LEFT"} 
            />

            <ParagraphWithImage 
                text={historyText4} 
                image={img4} 
                imagePosition={"RIGHT"} 
            />

        </Chapter>
    )
}