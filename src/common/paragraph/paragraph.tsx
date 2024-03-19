import { PropsWithChildren } from "react"
import clsx from 'clsx'
import './paragraph.scss'
import { useAppDispatch } from "../../store/store"
import { changeBigPhotoSrcAC } from "../../store/appSlice"
import { v4 as uuidv4 } from 'uuid'

export type ImagePositionType = "LEFT" | "RIGHT" | undefined

type PropsType = {
    text: string,
    image: string,
    imagePosition: ImagePositionType
}

export const ParagraphWithImage = (props: PropsWithChildren<PropsType>) => {
    const dispatch = useAppDispatch()
    const text: Array<string> = props.text.split('\n')

    const imageClass: string = clsx(
            'img_class',
            props.imagePosition === "RIGHT" && 'right_image_float',
            props.imagePosition === "LEFT" && 'left_image_float'
        )

    const onPhotoClickHandler = (imgSrc: string) => {
       dispatch(changeBigPhotoSrcAC(imgSrc))
    }

    return (
        <div className={'paragraph_with_image'}>
            <img alt="" src={props.image} className={imageClass} onClick={() => onPhotoClickHandler(props.image)}/>
            {text.map(p => {
                return <p key={uuidv4()}>{p}</p>
            })}
        </div>
    )
}