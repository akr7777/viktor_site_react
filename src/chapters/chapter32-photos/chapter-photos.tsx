import { Chapter } from "../../common/chapter/chapter"
import { CHAPTER_ID_NAMES } from "../../consts/chapter-id-names"
import { OnePhotosArticle } from "./chapter-photo-one-theme"

import photo1 from '../../assets/images/group_photo_1.jpg'

import photo2 from '../../assets/images/title-photos/photo_1.jpg'
import photo3 from '../../assets/images/title-photos/photo_2.jpg'
import photo4 from '../../assets/images/title-photos/photo_3.jpg'
import photo5 from '../../assets/images/title-photos/photo_4.jpg'
import photo6 from '../../assets/images/title-photos/photo_5.jpg'
import photo7 from '../../assets/images/content-photos/historical/history_photo_1.png'
import photo8 from '../../assets/images/content-photos/historical/history_photo_2.jpg'
import photo9 from '../../assets/images/content-photos/historical/history_photo_3.jpg'
import photo10 from '../../assets/images/content-photos/historical/history_photo_4.jpg'
import photo11 from '../../assets/images/content-photos/historical/history_photo_5.jpg'
import photo12 from '../../assets/images/content-photos/historical/history_photo_6.jpg'
import photo13 from '../../assets/images/content-photos/historical/history_photo_7.jpg'
import photo14 from '../../assets/images/content-photos/historical/history_photo_8.jpg'
import photo15 from '../../assets/images/content-photos/historical/history_photo_9.jpg'
import photo16 from '../../assets/images/content-photos/historical/history_photo_10.jpg'
import photo17 from '../../assets/images/content-photos/historical/history_photo_11.jpg'
import photo18 from '../../assets/images/content-photos/historical/history_photo_12.jpg'
import photo19 from '../../assets/images/content-photos/historical/history_photo_13.jpg'
import photo20 from '../../assets/images/content-photos/historical/history_photo_14.jpg'



import photo101 from '../../assets/images/chapters/activity-1.jpg'
import photo102 from '../../assets/images/chapters/activity-2.jpeg'
import photo103 from '../../assets/images/chapters/activity-3.jpg'
import photo104 from '../../assets/images/chapters/activity-4.jpg'
import photo105 from '../../assets/images/content-photos/training/training_photo_1.jpg'
import photo106 from '../../assets/images/content-photos/training/training_photo_2.jpg'
import photo107 from '../../assets/images/content-photos/training/training_photo_3.jpg'
import photo108 from '../../assets/images/content-photos/training/training_photo_4.jpg'

import photo201 from '../../assets/images/content-photos/diff/diff_photo_1.jpg'
import photo202 from '../../assets/images/content-photos/diff/diff_photo_2.jpg'
import photo203 from '../../assets/images/content-photos/diff/diff_photo_3.jpg'
import photo204 from '../../assets/images/content-photos/diff/diff_photo_4.jpg'
import photo205 from '../../assets/images/content-photos/diff/diff_photo_5.jpg'
import photo206 from '../../assets/images/content-photos/diff/diff_photo_6.jpg'
import photo207 from '../../assets/images/content-photos/diff/diff_photo_7.jpg'
import photo208 from '../../assets/images/content-photos/diff/diff_photo_8.jpg'
import photo209 from '../../assets/images/content-photos/diff/diff_photo_9.jpg'
import photo210 from '../../assets/images/content-photos/diff/diff_photo_10.jpg'
import photo211 from '../../assets/images/content-photos/diff/diff_photo_11.jpg'
import photo212 from '../../assets/images/content-photos/diff/diff_photo_12.jpg'

import './chapter-photos.scss'

export const ChapterTheeTwo_Photos = () => {

    const historicalPhotos: Array<string> = [
        photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14,
        photo15, photo16, photo17, photo18, photo19, photo20
    ]

    const trainPhotos: Array<string> = [
        photo101, photo102, photo103, photo104, photo105, photo106, photo107, photo108,
    ]

    const diffPhotos: Array<string> = [
        photo201, photo202, photo203, photo204, photo205, photo206, photo207, photo208, photo209, photo210, photo211, photo212,
    ]

    return (
        <Chapter 
            chapterTitle={"Фотогаллерея"} 
            chapterId={CHAPTER_ID_NAMES.photos}
            addClass="chapter-photo-bg"
        >

            <OnePhotosArticle photosArray={historicalPhotos} title={"Исторические фотографии"} />
            <OnePhotosArticle photosArray={trainPhotos} title={"Наши фотографии"} />
            <OnePhotosArticle photosArray={diffPhotos} title={"Интересные фотографии"} />


        </Chapter>
    )
}