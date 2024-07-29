import { motion } from 'framer-motion'

import './chapter4-videos-styles.scss'
import { ANIMATION_TIME } from '../../consts/store-consts'

type PropsType = {
    num: number
    src: string
}
export const Chapter4OneVideo = (props: PropsType) => {
    return (
        <motion.div 
            className="centrDiv"
            initial={{ 
                x: props.num % 2 === 0 ? -20 : 20, 
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: ANIMATION_TIME.long,
                },
              }}
        >
            {/* {props.children} */}
            <iframe className="one_other_video_div" src={props.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </motion.div>
    )
}