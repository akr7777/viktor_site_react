import { Chapter } from "../../common/chapter/chapter"
import { CHAPTER_ID_NAMES } from "../../consts/chapter-id-names"
import { eventsInfo } from "../../consts/events-info"
import OneEvent from "./one-full-event/one-event"
import {v4 as uuidv4} from 'uuid'

const OurEvents = () => {
    return <Chapter chapterTitle={"Наши мероприятия"} chapterId={CHAPTER_ID_NAMES.our_events}>
        {eventsInfo.map(oneEvent => {
            return (
                <OneEvent {...oneEvent} key={uuidv4()}/>
            )
        })}
    </Chapter>
}

export default OurEvents