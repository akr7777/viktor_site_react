import { useSelector } from 'react-redux'
import './big-photo.scss'
import { RootState, useAppDispatch } from '../../store/store'
import { changeBigPhotoSrcAC } from '../../store/appSlice'

const BigPhoto = () => {
    const dispatch = useAppDispatch()
    const photoImg: string | null = useSelector((state: RootState) => state.app.bigPhotoSrc)

    const onCloseClickHandler = () => dispatch(changeBigPhotoSrcAC(null))
    
    return (
        <>
        {
            photoImg && (
                <div className='photo_layout' onClick={onCloseClickHandler}>
                    <img alt="" src={photoImg} className='image_class'/>
                </div>
            )
        }
        </>
        
    )
}

export default BigPhoto