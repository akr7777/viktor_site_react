import { useState } from 'react'
import { MENU_POINTS_LIST } from './menu-points'
import {v4 as uuidv4} from 'uuid'

import menuImage from './../assets/icons/mobile-menu-icon.svg'
// import crossImage from './../assets/icons/cross.png'
import crossImage from './../assets/icons/cross_2.png'

import './nav-menu-mobile.scss'

const NavigationMenuMobile = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            {!isOpen && <div className='nav_menu_mobile_icon'>
                <img alt='' src={menuImage} onClick={() => setIsOpen(true)}/>
            </div>}

            {isOpen && (
                <div className='layout'>
                    <div className='nav_menu_mobile_icon'>
                        <img alt='' src={crossImage} onClick={() => setIsOpen(false)}/>
                    </div>
                    <div className='nav_menu_wrapper'>
                        {MENU_POINTS_LIST.map(el => {
                            return (
                                <a href={el.link} key={uuidv4()} className='nav_link_mobile'>
                                    <div onClick={() => setIsOpen(false)} >
                                        {el.title}
                                    </div>
                                </a>
                            )
                            })}
                    </div>
                </div>
            )}
        </>
        
    )
}

export default NavigationMenuMobile