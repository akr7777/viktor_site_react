
import { OnePhoto } from './one-photo'
import { v4 as uuidv4 } from 'uuid'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ANIMATION_TIME } from '../../consts/store-consts'

import arrowDown from '../../assets/icons/arrow1.png'
import arrowUp from '../../assets/icons/arrow2.png' 

import './chapter-photos.scss'
import '../../assets/styles/arrowClass.scss'

type PropsType = {
    photosArray: Array<string>,
    title: string,
}

export const OnePhotosArticle = (props: PropsType) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const onOpenClick = () => setIsOpen(true)
    const onCloseClick = () => setIsOpen(false)

    return (
        <div className='chapter-photo-art'>
            <motion.div 
                className='chapter-photo-div'
                initial={{ 
                    x: 20,
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                    duration: ANIMATION_TIME.short,
                    },
                }}
            >
                <h3>{props.title}</h3>
                <img
                    alt=""
                    src={isOpen ? arrowUp : arrowDown}
                    onClick={isOpen ? onCloseClick : onOpenClick}
                    className='arrow_img'
                />
            </motion.div>

            <AnimatePresence>
                {isOpen && 
                    <motion.div 
                        className="chapter-photos-div"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: ANIMATION_TIME.short }}
                        exit={{ opacity: 0 }}
                    >
                        {props.photosArray.map(p => 
                            <OnePhoto imgSrc={p} key={uuidv4()}/>
                        )}
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}