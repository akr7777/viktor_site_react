import EventWrapperComponent from "../../../common/event/event-wrapper"
import { useAppDispatch } from "../../../store/store"
import { changeBigPhotoSrcAC } from "../../../store/appSlice"

import eventPosterPhoto from '../../../assets/images/event4/event_4_poster.jpg'

import './event-4.scss'


const Event_4 = () => {
    const dispatch = useAppDispatch()

    const onPhotoClickHandler = (imgSrc: string) => {
        dispatch(changeBigPhotoSrcAC(imgSrc))
    }

    return (
            <EventWrapperComponent 
                    id={4} 
                    previewDate={new Date("2024-07-17T20:00:00")} 
                    previewTitle={'Невидимое оружие советских спецслужб от русского офицера Виктора Спиридонова. История создания советского боевого искусства.   '}
            >

                <h2>17 июля 2024 года, 20:00</h2>
                {/* <div className="our_events_adv_div" id="seminar_20240717">
                    <p>Гость программы, Виктор Говорченко основатель клуба "Спиридонов", соучредитель спортивно-исторического клуба "Дружина Аркона", участник сборной Москвы, судья Федерации исторического фехтования на открытых чемпионатах России по историческому фехтованию, соорганизатор, участник и победитель и неоднократный призёр соревнований "Удаль молодецкая" Федерации вольного боя, каскадёр театра и кино. Опыт занятий в прикладными и спортивными единоборствами более 30 лет.</p>
                </div> */}
                
                <div className="event4-photo-div">
                    <img alt="" src={eventPosterPhoto} onClick={() => onPhotoClickHandler(eventPosterPhoto)}/>
                    {/* <img alt="" src={eventPosterPhoto} /> */}
                </div>

                <p>Гость программы, Виктор Говорченко основатель клуба "Спиридонов", соучредитель спортивно-исторического клуба "Дружина Аркона", участник сборной Москвы, судья Федерации исторического фехтования на открытых чемпионатах России по историческому фехтованию, соорганизатор, участник и победитель и неоднократный призёр соревнований "Удаль молодецкая" Федерации вольного боя, каскадёр театра и кино. Опыт занятий в прикладными и спортивными единоборствами более 30 лет.</p>
                <a href='https://dharma1937.fm/'>Ссылка на эфир</a>

            </EventWrapperComponent>
    )
}

export default Event_4