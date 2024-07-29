import { useState } from 'react'
import { motion } from 'framer-motion'
import { ANIMATION_TIME } from '../../consts/store-consts'

import './materials_styles.scss'

type PropsType = {
    link: string
    author: string
    title: string
    photo1: string
    photo2: string
}

export const MaterialCard = (props: PropsType) => {
    const [on, setOn] = useState<boolean>(false)
    const onMouseOverHandler = () => setOn(true)
    const onMouseLeaveHandler = () => setOn(false)

    return (
        <motion.div 
            className="material_card"
            initial={{ 
                y: 20,
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: ANIMATION_TIME.long,
                },
              }}
        >
            <a href={props.link}>
              {/* <div className="m2"></div> */}
                <img 
                    alt=""
                    src={on ? props.photo2 : props.photo1}
                    onMouseOver={onMouseOverHandler}
                    onMouseLeave={onMouseLeaveHandler}
                />
            </a>
            <h4>{props.author}</h4>
            <h5>{props.title}</h5>
            <a href={props.link}>
                <button className='download_btn_class'>
                    Скачать
                </button>
                </a>
          </motion.div>
    )
}