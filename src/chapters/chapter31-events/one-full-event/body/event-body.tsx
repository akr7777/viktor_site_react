import { EventType } from "../../../../consts/events-info"
import { EventText } from "./event-text"
import { EventPhotoGallery } from "./photo-gallery"

export const EventBody = (props: EventType) => {
    return (
        <div className="event_body_wrapper">
            <h2>{props.title}</h2>

            <EventPhotoGallery photos={props.photosBefore} />

            <EventText text={props.textBefore} />

            <hr/>

            <h2>{props.textMiddle}</h2>

            <EventPhotoGallery photos={props.photosAfter} />

            <EventText text={props.textAfter} />

            <hr/>

            <h2>{props.conclusionText}</h2>

        </div>
    )
}