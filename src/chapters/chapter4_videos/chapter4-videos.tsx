import { Chapter } from "../../common/chapter/chapter"
import { CHAPTER_ID_NAMES } from "../../consts/chapter-id-names"
import './chapter4-videos-styles.scss'

export const ChapterFour_Videos = () => {
    return (
        <Chapter chapterTitle={"Наши видео"} chapterId={CHAPTER_ID_NAMES.video}>

            <div className="iframe_div">
                <iframe src="https://www.youtube.com/embed/QR0fg1xqc7A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="iframe_div">
                <iframe src="https://www.youtube.com/embed/lir2HguvXq0?si=p_J3ay3a4kxd9uIU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="others_video_div">
                <div className="centrDiv">
                    <iframe className="one_other_video_div" src="https://www.youtube-nocookie.com/embed/lo8kj71nSi0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="centrDiv">
                    <iframe className="one_other_video_div" src="https://www.youtube-nocookie.com/embed/IgdjYRbpZto" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="centrDiv">
                    <iframe className="one_other_video_div" src="https://www.youtube-nocookie.com/embed/l7sHfd1C4ys" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="centrDiv">
                    <iframe className="one_other_video_div" src="https://www.youtube-nocookie.com/embed/GypWh72MQxc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>

        </Chapter>
    )
}