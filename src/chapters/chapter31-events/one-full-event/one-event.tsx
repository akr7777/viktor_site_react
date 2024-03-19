import { PropsWithChildren } from 'react'
import './one-event.scss'
import { EventType } from '../../../consts/events-info'
import { EventPreviewLine } from './preview/preview-line'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { EventBody } from './body/event-body'

const OneEvent = (props: PropsWithChildren<EventType>) => {
    const openedEventListIds: Array<number> = useSelector((state: RootState) => state.app.openedEventListIds)
    const isOpened: boolean = openedEventListIds.some(id => id === props.id)
    
    return (
        <div className="one_event_wrapper">
            <EventPreviewLine date={props.date} preview={props.preview} id={props.id}/>
            {isOpened && <EventBody {...props}/>}
        </div>
    )
}

export default OneEvent