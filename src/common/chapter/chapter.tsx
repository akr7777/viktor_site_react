import './chapter.scss'
import { PropsWithChildren } from "react"

type PropsType = {
    chapterTitle: string
    chapterId?: string
}

export const Chapter = (props: PropsWithChildren<PropsType>) => {
    return (
        <div className='chapter' id={props.chapterId}>
            <center>
                <h2>{props.chapterTitle}</h2>
            </center>
            {props.children}
        </div>
    )
}