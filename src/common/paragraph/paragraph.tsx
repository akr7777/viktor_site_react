import { PropsWithChildren } from "react"
import clsx from 'clsx'
import './paragraph.scss'

export type ImagePositionType = "LEFT" | "RIGHT" | undefined

type PropsType = {
    text: string,
    image: string,
    imagePosition: ImagePositionType
}

export const ParagraphWithImage = (props: PropsWithChildren<PropsType>) => {
    const imageClass: string = clsx(
            'img_class',
            props.imagePosition === "RIGHT" && 'right_image_float',
            props.imagePosition === "LEFT" && 'left_image_float'
        )
    return (
        <p className={'paragraph_with_image'}>
            <img alt="" src={props.image} className={imageClass} />
            {props.text}
        </p>
    )
}