import { CHAPTER_ID_NAMES } from "../consts/chapter-id-names"

type OneMenuPointType = {
    order: number,
    title: string,
    link: string,
}
export const MENU_POINTS_LIST: Array<OneMenuPointType> = [
    {order: 1, title: "О нас", link: "#" + CHAPTER_ID_NAMES.about},
    {order: 2, title: "История", link: "#" + CHAPTER_ID_NAMES.history},
    {order: 3, title: "Деятельность", link: "#" + CHAPTER_ID_NAMES.our_activity},
    {order: 4, title: "Мероприятия", link: "#" + CHAPTER_ID_NAMES.our_events},
    {order: 5, title: "Видео", link: "#" + CHAPTER_ID_NAMES.video},
    {order: 6, title: "Материалы", link: "#" + CHAPTER_ID_NAMES.materials},
    {order: 7, title: "Контакты", link: "#" + CHAPTER_ID_NAMES.contacts},
]