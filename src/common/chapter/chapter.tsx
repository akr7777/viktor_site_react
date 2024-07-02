import { PropsWithChildren } from "react"
import { motion } from "framer-motion"

import './chapter.scss'
import { ANIMATION_TIME } from "../../consts/store-consts"

type PropsType = {
    chapterTitle: string
    chapterId?: string
}

export const Chapter = (props: PropsWithChildren<PropsType>) => {
    return (
        <div className='chapter' id={props.chapterId}>
            <center>
                <motion.h2
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: ANIMATION_TIME.short,
                        },
                      }}
                    // transition={{ duration: ANIMATION_TIME.short }}
                    // animate={{ x: 0 }}
                >
                    {props.chapterTitle}
                </motion.h2>
            </center>
            {props.children}
        </div>
    )
}