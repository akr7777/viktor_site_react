import { Chapter } from "../common/chapter/chapter"
import { CHAPTER_ID_NAMES } from "../consts/chapter-id-names"

export const ChapterOne_About_Us = () => {
    return (
        <Chapter 
            chapterTitle={"О нас"} 
            chapterId={CHAPTER_ID_NAMES.about}
        >
            <p>
                Клуб организован группой энтузиастов-исследователей отечественной истории и назван в честь создателя 
                Советской системы прикладной подготовки САМОЗ, основоположника САМБО, учредителя спортивного общества "Динамо" 
                Виктора Афанасьевича Спиридонова.
            </p>
            <p>
                Мотив создания клуба заключается в изучении, сохранении и развитии отечественных традиций в области прикладных 
                методик Советского периода.
            </p>
        
        </Chapter>
    )
}