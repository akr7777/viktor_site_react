import { Chapter } from "../../common/chapter/chapter"
import { CHAPTER_ID_NAMES } from "../../consts/chapter-id-names"
import { Chapter4OneVideo } from "./chapter4-one-video"
import {v4 as uuid} from 'uuid'

import './chapter4-videos-styles.scss'

export const ChapterFour_Videos = () => {

    const firstArr: Array<string> = [
        "https://www.youtube.com/embed/QR0fg1xqc7A",
        "https://www.youtube.com/embed/lir2HguvXq0?si=p_J3ay3a4kxd9uIU",
        "https://www.youtube.com/embed/gzbP-GwLusY?si=o8JFyasJhc444lGB",
        "https://www.youtube.com/embed/PGe_YY-3sXI?si=8lk1glXQsdjLqNDt",
        "https://www.youtube.com/embed/PKUgK7UhIOc?si=chmbStB8B7gFAhbg",
    ]

    const secondArr: Array<string> = [
        "https://www.youtube.com/embed/7QUW4WcnZ7Q?si=sqkTw7e_k7HjaHkU", 
        "https://www.youtube.com/embed/wqTpKzpS7Bc?si=jCMsX4Byqh1dZDom",
        "https://www.youtube-nocookie.com/embed/lo8kj71nSi0",
        "https://www.youtube-nocookie.com/embed/IgdjYRbpZto",
        "https://www.youtube-nocookie.com/embed/l7sHfd1C4ys",
        "https://www.youtube-nocookie.com/embed/GypWh72MQxc",
    ]
    return (
        <Chapter 
            chapterTitle={"Наши видео"} 
            chapterId={CHAPTER_ID_NAMES.video}
            addClass="chapter_videos_wrapper"
        >

            {/* <div className="iframe_div">
                <iframe src="https://www.youtube.com/embed/QR0fg1xqc7A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="iframe_div">
                <iframe src="https://www.youtube.com/embed/lir2HguvXq0?si=p_J3ay3a4kxd9uIU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="iframe_div">
                <iframe src="https://www.youtube.com/embed/gzbP-GwLusY?si=o8JFyasJhc444lGB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div> */}

            <div className="others_video_div">
                {/* <div className="centrDiv">
                    <iframe className="one_other_video_div" src="https://www.youtube.com/embed/QR0fg1xqc7A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="centrDiv">
                    <iframe className="one_other_video_div" src="https://www.youtube.com/embed/lir2HguvXq0?si=p_J3ay3a4kxd9uIU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="centrDiv">
                    <iframe className="one_other_video_div" src="https://www.youtube.com/embed/gzbP-GwLusY?si=o8JFyasJhc444lGB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="centrDiv">
                    <iframe className="one_other_video_div" src="https://www.youtube.com/embed/PGe_YY-3sXI?si=8lk1glXQsdjLqNDt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div> */}
                {firstArr.map((s,i) => <Chapter4OneVideo key={uuid()} num={i} src={s}/>)}
            </div>

            <div className="others_video_div">
                {/* <div className="centrDiv">
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
                </div> */}
                {secondArr.map((s,i) => <Chapter4OneVideo key={uuid()} num={i} src={s}/>)}

            </div>

        </Chapter>
    )
}