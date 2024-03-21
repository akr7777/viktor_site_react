import dayjs, { Dayjs } from "dayjs";
import clsx from "clsx";

import arrowDown from '../../../../assets/icons/arrow1.png'
import arrowUp from '../../../../assets/icons/arrow2.png'

import './preview-line.scss'
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { addOpenedEventIdAC, removeOpenedEventIdAC } from "../../store/appSlice";
import { DATE_TIME_FORMAT } from "../../consts/store-consts";

type PropsType = {
    id: number,
    date: Date,
    preview: string,
}

export const EventPreviewLine = (props: PropsType) => {
    const dispatch = useAppDispatch()
    const date: Dayjs = dayjs(props.date)
    const now: Dayjs = dayjs()
    const dateDiff: number = date.diff(now)

    const dateClass: string = clsx(
        'one_field',
        dateDiff <= 0 ? 'date_preview_black' : 'date_preview_red'
    )

    const openedEventListIds: Array<number> = useSelector((state: RootState) => state.app.openedEventListIds)
    const isOpened: boolean = openedEventListIds.some(id => id === props.id)

    const onArrowDownClickHandler = () => dispatch(addOpenedEventIdAC(props.id))
    const onArrowUpClickHandler = () => dispatch(removeOpenedEventIdAC(props.id))

    return (
        <div className="wrapper">
            <div className={dateClass}>
                <h3>{date.format(DATE_TIME_FORMAT)}</h3>
            </div>
            <div className="one_field">
                <h3>{props.preview}</h3>
            </div>
            {
                isOpened
                    ? <div className="one_field">
                        <img src={arrowUp} alt="" className="arrow_img" onClick={onArrowUpClickHandler}/>
                    </div>
                    : <div className="one_field">
                        <img src={arrowDown} alt="" className="arrow_img" onClick={onArrowDownClickHandler}/>
                    </div>
            }
            
        </div>
    )
}