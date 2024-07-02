import { Chapter } from "../../common/chapter/chapter"
import { CHAPTER_ID_NAMES } from "../../consts/chapter-id-names"
import Event_1 from "./event-1/event-1"
import Event_2 from "./event-2/event-2"
import Event_3 from "./event-3/event-3"
import Event_4 from "./event-4/event-4"

const OurEvents = () => {
    return <Chapter chapterTitle={"Наши мероприятия"} chapterId={CHAPTER_ID_NAMES.our_events}>
        <Event_1 />
        <Event_2 />
        <Event_3 />
        <Event_4 />
    </Chapter>
}

export default OurEvents