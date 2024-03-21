import EventWrapperComponent from "../../../common/event/event-wrapper"

import ph1 from '../../../assets/images/event1/ad_0.png'

import med_1 from '../../../assets/images/event1/med_1.jpg'
import med_2 from '../../../assets/images/event1/med_2.jpg'
import med_3 from '../../../assets/images/event1/med_3.jpg'
import med_4 from '../../../assets/images/event1/med_4.jpg'

import Photo_1 from '../../../assets/images/event1/report_med/Photo_1.jpg'
import Photo_2 from '../../../assets/images/event1/report_med/Photo_2.jpg'
import Photo_3 from '../../../assets/images/event1/report_med/Photo_3.jpg'
import Photo_4 from '../../../assets/images/event1/report_med/Photo_4.jpg'
import Photo_5 from '../../../assets/images/event1/report_med/Photo_5.jpg'
import Photo_6 from '../../../assets/images/event1/report_med/Photo_6.jpg'
import Photo_7 from '../../../assets/images/event1/report_med/Photo_7.jpg'
import Photo_8 from '../../../assets/images/event1/report_med/Photo_8.jpg'
import Photo_10 from '../../../assets/images/event1/report_med/Photo_10.jpg'
import Photo_11 from '../../../assets/images/event1/report_med/Photo_11.jpg'
import Photo_12 from '../../../assets/images/event1/report_med/Photo_12.jpg'
import Photo_14 from '../../../assets/images/event1/report_med/Photo_14.jpg'
import { changeBigPhotoSrcAC } from "../../../store/appSlice"
import { useAppDispatch } from "../../../store/store"

import './event_1.scss'

const Event_1 = () => {
    const dispatch = useAppDispatch()

    const onPhotoClickHandler = (imgSrc: string) => {
        dispatch(changeBigPhotoSrcAC(imgSrc))
    }

    return (
        <EventWrapperComponent 
                id={1} 
                previewDate={new Date("2023-02-04T11:00:00")} 
                previewTitle={"Медицинский семинар №1 по теме обработки ран и наложения швов"}
        >

            <h2>4 февраля 2023 года, 11:00</h2>
            <h2>Клуб "Спиридонов" объявляет о проведении однодневного семинара по оказанию первой медицинской помощи.</h2>

            <div className="our_events_adv_div" id="seminar_20230204_1">
                <div>
                    <p>
                      В наши неспокойные времена уметь оказывать медицинскую помощь будет полезно каждому. Что надо знать о различных видах ранений? Как правильно наложить швы? Как обработать рану? Как правильно наложить шину при переломе? Что делать, если у человека рядом с вами произошёл эпилептический припадок? На эти и многие другие вопросы мы постараемся подробнейшим образом ответить.
                    </p>
                    <p>
                      На семинаре будет уделено внимание как теоретической, так и практической части, чтобы каждый смог закрепить полученный навык.
                    </p>

                    <h2>Программа семинара:</h2>

                    <ul>
                      <li>Освоение основных мединструментов.</li>
                      <li>Применение подручных средств в медцелях.</li>
                      <li>Обработка ран.</li>
                      <li>Наложение швов.</li>
                      <li>Удаление посторонних предметов из открытой раны.</li>
                      <li>Первая помощь при вывихах и переломах.</li>
                      <li>Первая помощь при эпилептических припадках.</li>
                      <li>Практика, на которой все слушатели семинара получат возможность закрепить полученные навыки.</li>
                    </ul>

                    <p>
                        Для записи на семинар отправите письмо на почту:
                    </p>
                    <a href="mailto:samoz.spiridonov@gmail.com">samoz.spiridonov@gmail.com</a>
                
                </div>


                <div className="our_events_right_div">
                  <img src={ph1} onClick={() => onPhotoClickHandler(ph1)} />
                  <img src={med_1} onClick={() => onPhotoClickHandler(med_1)} />
                  <img src={med_2} onClick={() => onPhotoClickHandler(med_2)} />
                  <img src={med_3} onClick={() => onPhotoClickHandler(med_3)} />
                  <img src={med_4} onClick={() => onPhotoClickHandler(med_4)} />
                </div>

              </div>


              <div className="our_events_done">
                <hr/>
                <h2>Семинар состоялся!</h2>
                
                <div className="event_1_photo_gallery">
                  <center>
                    <img src={Photo_1} className="img_1" onClick={() => onPhotoClickHandler(Photo_1)}/>
                    <img src={Photo_4} className="img_2" onClick={() => onPhotoClickHandler(Photo_4)} />
                    <img src={Photo_5} className="img_2" onClick={() => onPhotoClickHandler(Photo_5)}/>
                    <img src={Photo_6} className="img_2" onClick={() => onPhotoClickHandler(Photo_6)}/>
                    <img src={Photo_7} className="img_2" onClick={() => onPhotoClickHandler(Photo_7)}/>
                    <img src={Photo_8} className="img_2" onClick={() => onPhotoClickHandler(Photo_8)}/>
                    <img src={Photo_10} className="img_2" onClick={() => onPhotoClickHandler(Photo_10)}/>
                    <img src={Photo_11} className="img_2" onClick={() => onPhotoClickHandler(Photo_11)}/>
                    <img src={Photo_12} className="img_2" onClick={() => onPhotoClickHandler(Photo_12)}/>
                    <img src={Photo_14} className="img_1" onClick={() => onPhotoClickHandler(Photo_14)}/>
                  </center>
                </div>

                <div className="our_events_text_image">
                  <img src={Photo_3} className="img_3 our_events_float_left" onClick={() => onPhotoClickHandler(Photo_3)}/>
                    <p>
                        Участники прослушали лекцию и попробовали реализовать теорию на практике (на тренажерах) :). Занятия длились восемь часов с перерывами и каждый имел возможность задать вопросы, а также получить развернутые ответы. В итоге все остались довольны!
                    </p>
                </div>
                <div className="our_events_text_image">
                    <img src={Photo_2} className="img_3 our_events_float_right" onClick={() => onPhotoClickHandler(Photo_2)}/>
                    <p>
                        Участниками высказывались пожелания о продолжении наших занятий, поскольку мы не успели осветить все запланированные темы. В следующий раз мы соберемся через три недели.
                    </p>
                </div>
                <p>
                  Ждите: скоро на наших ресурсах появится видео прошедшего мероприятия и объявление о будущих встречах.
                </p>
                <h2>Следите за обновлениями!</h2>
                
              </div>
    

        </EventWrapperComponent>
    )
}

export default Event_1