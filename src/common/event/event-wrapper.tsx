import { PropsWithChildren } from 'react'
import dayjs, { Dayjs } from "dayjs";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { addOpenedEventIdAC, removeOpenedEventIdAC } from "../../store/appSlice";
import { ANIMATION_TIME, DATE_TIME_FORMAT } from '../../consts/store-consts';
import { AnimatePresence, motion } from 'framer-motion';

import arrowDown from '../../assets/icons/arrow1.png'
import arrowUp from '../../assets/icons/arrow2.png'

import './event-classes.scss'
import '../../assets/styles/arrowClass.scss'

type PropsType = {
    id: number
    previewDate: Date,
    previewTitle: string,
}

const EventWrapperComponent = (props: PropsWithChildren<PropsType>) => {

    const dispatch = useAppDispatch()
    const date: Dayjs = dayjs(props.previewDate)
    const now: Dayjs = dayjs()
    const dateDiff: number = date.diff(now)

    const dateClass: string = clsx(
        'one_event_one_field',
        dateDiff <= 0 ? 'date_preview_black' : 'date_preview_red'
    )

    const openedEventListIds: Array<number> = useSelector((state: RootState) => state.app.openedEventListIds)
    const isOpened: boolean = openedEventListIds.some(id => id === props.id)

    const onArrowDownClickHandler = () => dispatch(addOpenedEventIdAC(props.id))
    const onArrowUpClickHandler = () => dispatch(removeOpenedEventIdAC(props.id))


    return (
        <div className='one_event_wrapper'>


            {/* Preview line > */}
            <div className="preview_line">
                <div className={dateClass}>
                    {date.format(DATE_TIME_FORMAT)}
                </div>
                <div className="one_event_one_field">
                    {props.previewTitle}
                </div>
                {
                    isOpened
                        ? <div className="one_event_one_field">
                            <img src={arrowUp} alt="" className="arrow_img" onClick={onArrowUpClickHandler}/>
                        </div>
                        : <div className="one_event_one_field">
                            <img src={arrowDown} alt="" className="arrow_img" onClick={onArrowDownClickHandler}/>
                        </div>
                }
                
            </div>
            {/* < Preview line */}

            <AnimatePresence>
                { 
                    isOpened && 
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: ANIMATION_TIME.long
                            }}
                            exit={{ opacity: 0 }}
                        >
                            {props.children}
                        </motion.div> 
                }
            </AnimatePresence>

        </div>
    )
}

export default EventWrapperComponent
