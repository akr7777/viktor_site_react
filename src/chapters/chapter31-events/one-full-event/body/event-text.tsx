import {v4 as uuidv4} from 'uuid'

type PropsType = {
    text: string
}

export const EventText = (props: PropsType) => {
    const JsxElement = props.text.split('\n').map(p => {
        const pText = p.length > 0
            ? <p key={uuidv4()}>{p}</p>
            : <br key={uuidv4()}/>
        return (
            pText
        )
    })

    return JsxElement

}