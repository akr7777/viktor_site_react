import EventWrapperComponent from "../../../common/event/event-wrapper"

import ph1 from '../../../assets/images/event2/flier.png'
import ph2 from "../../../assets/images/event2/Photo_15.jpeg"
import ph3 from "../../../assets/images/event2/Photo_11.jpeg"

import ph1_1 from "../../../assets/images/event2/report/photo_1.jpg"
import ph1_2 from "../../../assets/images/event2/report/photo_2.jpg"
import ph1_3 from "../../../assets/images/event2/report/photo_3.jpg"
import ph1_4 from "../../../assets/images/event2/report/photo_4.jpg"

import { useAppDispatch } from "../../../store/store"
import { changeBigPhotoSrcAC } from "../../../store/appSlice"

import './event-2-classes.scss'

const Event_2 = () => {
    const dispatch = useAppDispatch()
    const onPhotoClickHandler = (imgSrc: string) => {
        dispatch(changeBigPhotoSrcAC(imgSrc))
    }

    return (
        <EventWrapperComponent 
                id={2} 
                previewDate={new Date("2023-02-24T11:00:00")} 
                previewTitle={"Медицинский семинар №2 по теме помощи пострадавшим от вредного воздействия окружающей среды"}
        >

            <h2>24 февраля 2023 года, 11:00</h2>
            <h2>Клуб "Спиридонов" объявляет о проведении однодневного семинара по оказанию первой медицинской помощи.</h2>

            <div className="our_events_adv_div">
                <div>
                    <p>
                      Клуб "Спиридонов" проводит открытый семинар по оказанию медицинской помощи пострадавшим от вредного воздействия окружающей среды. 
                    </p>
                    <p>
                      На семинаре будет разобран порядок действий при ожогах, отравлениях, обморожениях, тепловых ударов, переохлаждениях, обморочных состояниях. Дополнительная тема изучения - переломы, вывихи, виды инъекций.
                    </p>
                    <p>
                      Будет уделено внимание как теоретической, так и практической части, чтобы каждый смог закрепить полученный навык.
                    </p>
                    <p>Для записи на семинар отправите письмо на почту <a href="mailto:samoz.spiridonov@gmail.com">samoz.spiridonov@gmail.com</a></p>
                </div>

                <div className="our_events_right_div">
                  <img src={ph1} onClick={() => onPhotoClickHandler(ph1)} />
                  <img src={ph2} onClick={() => onPhotoClickHandler(ph2)} />
                  <img src={ph3} onClick={() => onPhotoClickHandler(ph3)} />
                </div>

              </div>

              <div >
                <hr/>
                <h2>
                  Второй семинар по ознакомлению с реанимационными мерами первой помощи состоялся!
                </h2>

                <div className="event_2_photo_gallery">
                    <img src={ph1_1} className="img_2" onClick={() => onPhotoClickHandler(ph1_1)}/>
                    <img src={ph1_2} className="img_2" onClick={() => onPhotoClickHandler(ph1_2)}/>
                    <img src={ph1_3} className="img_2" onClick={() => onPhotoClickHandler(ph1_3)}/>
                    <img src={ph1_4} className="img_2" onClick={() => onPhotoClickHandler(ph1_4)}/>
                </div>

                <p>
                  В этот раз были освещены темы термических воздействий на тело, участники пробовали разогнать кровь в условно замёрзших конечностях, ознакомились с классификацией обморожений и ожогов. Также узнали как предотвращать и оказывать помощь в этих лучаях. 
                </p>
                <p>
                  Практическая часть семинара состояла в условной пробе приемов в случае закупорки у себя или другого человека дыхательных путей инородным предметом, в случае остановки сердца и дыхания. 
                </p>
                <p>
                  До некоторых тем так и не добрались, всём были интересны реанимационные меры, что конечно важно усвоить, поэтому коллектив Клуба планирует продолжение семинарских занятий по медицинской помощи. В планах проведение обзорного семинара по структуре и принципам медпомощи. 
                </p>
                <p>
                  Не пропустите, будет интересно, следите за нашими публикациями на сайте и в соцсетях.
                </p>
                
                <h2>Следите за обновлениями!</h2>
                
              </div>

        </EventWrapperComponent>
    )
}

export default Event_2