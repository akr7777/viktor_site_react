import { PropsWithChildren } from "react"
import { motion } from "framer-motion"
import { ANIMATION_TIME } from "../../consts/store-consts"
import clsx from "clsx"

import './chapter.scss'

type PropsType = {
    chapterTitle: string
    chapterId?: string
    addClass?: string
}

export const Chapter = (props: PropsWithChildren<PropsType>) => {
    return (
        <div 
            className={clsx('chapter', props.addClass && props.addClass)}
            id={props.chapterId}
        >
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