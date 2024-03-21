import EventWrapperComponent from "../../../common/event/event-wrapper"
import { changeBigPhotoSrcAC } from "../../../store/appSlice"
import { useAppDispatch } from "../../../store/store"

import photo1 from '../../../assets/images/event3/photo_1.jpeg'
// import photo2 from '../../../assets/images/event3/photo_2.jpeg'
import photo3 from '../../../assets/images/event3/photo_3.jpeg'
import photo4 from '../../../assets/images/event3/photo_4.jpeg'
import photo5 from '../../../assets/images/event3/photo_5.jpeg'

import './event_3_classes.scss'

const Event_3 = () => {
    const dispatch = useAppDispatch()
    const onPhotoClickHandler = (imgSrc: string) => {
        dispatch(changeBigPhotoSrcAC(imgSrc))
    }

    return (
        <EventWrapperComponent 
                id={3} 
                previewDate={new Date("2024-03-16T14:00:00")} 
                previewTitle={"Масленица 2024 в Боровске."}
        >

            <h2>6 марта в г. Боровске Калужской области клуб "Спиридонов" учавствовал в празднике проводов зимы.</h2>

            

            <div>
                <div className="iframe_div">
                    <iframe src="https://www.youtube.com/embed/lir2HguvXq0?si=p_J3ay3a4kxd9uIU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <br/>
                <p>
                    В празднике принимали участие различные зарубежные и отечественные коллективы, в том числе и наш клуб. 
                    Специально для праздника клубом была разработана и представлена интерактивно-демонстрационная программа. 
                    Яркие костюмы, музыка, интересные участники, всё это принесло массу позитивных переживаний зрителям и участникам. 
                    Организатор праздника - заслуженный деятель искусств Гедэминас Леонович Таранда.
                </p>
                <br/>
            </div>

            <div className="event_3_photo_gallery">
                <img alt="" src={photo1} onClick={() => onPhotoClickHandler(photo1)}/>
                {/* <img alt="" src={photo2} onClick={() => onPhotoClickHandler(photo2)}/> */}
                <img alt="" src={photo3} onClick={() => onPhotoClickHandler(photo3)}/>
                <img alt="" src={photo4} onClick={() => onPhotoClickHandler(photo4)}/>
                <img alt="" src={photo5} onClick={() => onPhotoClickHandler(photo5)}/>
            </div>

        </EventWrapperComponent>
    )
}

export default Event_3
