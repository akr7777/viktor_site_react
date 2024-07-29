import { changeBigPhotoSrcAC } from "../../store/appSlice"
import { useAppDispatch } from "../../store/store"

import './chapter-photos.scss'

type PropsType = {
    imgSrc: string
}

export const OnePhoto = (props: PropsType) => {
    const dispatch = useAppDispatch()
        
    const onPhotoClickHandler = () => dispatch(changeBigPhotoSrcAC(props.imgSrc))

    return (
        <img 
            src={props.imgSrc} 
            alt="" 
            onClick={onPhotoClickHandler} 
            className="chapter-photos-img-class"
        />
    )
}