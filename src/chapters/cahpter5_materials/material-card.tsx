import { useState } from 'react'
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
        <div className="material_card">
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
            <a href={props.link}><button>Скачать</button></a>
          </div>
    )
}