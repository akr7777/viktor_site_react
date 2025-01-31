import { Chapter } from '../../common/chapter/chapter'
import { motion } from 'framer-motion'
import { ANIMATION_TIME } from '../../consts/store-consts'
import { PropsWithChildren, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

// import iconEmail from '../../assets/icons/icon-email.png'
// import iconYoutube from '../../assets/icons/icon-youtube.png'
// import iconPhone from '../../assets/icons/icon-phone.png'
// import iconTelegram from '../../assets/icons/icon-telegram.png'
// import iconVk from '../../assets/icons/icon-vk.png'

import iconEmail from '../../assets/icons/contacts/email.svg'
import iconYoutube from '../../assets/icons/contacts/youtube.svg'
import iconPhone from '../../assets/icons/contacts/phone.png'
import iconTelegram from '../../assets/icons/contacts/tg.svg'
import iconVk from '../../assets/icons/contacts/vk.svg'

import copyIcon from '../../assets/icons/copy.png'

import './contacts.scss'

export const OneContactDiv = (props: PropsWithChildren<unknown>) => {
  return (
    <motion.div 
          className="contact_card" 
          initial={{ x: 0, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: ANIMATION_TIME.long,
            },
          }}
    >
      {props.children}
    </motion.div>
  )

}

const ChapterSix_Contacts = () => {

  // const [text, setText] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <Chapter 
      chapterTitle={'Наши контакты'} addClass='contacts_bg'>
      {/* <div className="chapter" id="contacts"> */}
      <div id="contacts">
      {/* <center><h2>Наши контакты</h2></center> */}
      <div className="contacts_div">

        {/* <motion.div 
          className="contact_card" 
          initial={motionAnimationInitial}
          whileInView={motionAnimationWhileInView}
        > */}
        <OneContactDiv>
            <a href="tel:+79990041869">
              <img src={iconPhone} alt="Позвоните нам, чтобы узнать подробности." />
            </a>
            <a href="tel:+79168668913">+7 (916) 866-89-13</a>
        </OneContactDiv>
        {/* </motion.div> */}

        {/* <motion.div 
          className="contact_card"
          initial={motionAnimationInitial}
          whileInView={motionAnimationWhileInView}
        > */}
        <OneContactDiv>
            <a href="mailto:samoz.spiridonov@gmail.com">
              <img src={iconEmail} alt="Написать нам письмо можно по этой почте." />
            </a>
            <a href="mailto:samoz.spiridonov@gmail.com">samoz.spiridonov@gmail.com</a>
        </OneContactDiv>
        {/* </motion.div> */}

        {/* <motion.div 
          className="contact_card"
          // initial={motionAnimationInitial}
          // whileInView={motionAnimationWhileInView}
        > */}
        <OneContactDiv>
            <a href="https://vk.com/id579768890">
              <img src={iconVk} alt="Наша группа Вконтакте" />
            </a>
            <a href="https://m.vk.com/club218308796">Наша страница Вконтакте</a>
        </OneContactDiv>
        {/* </motion.div> */}

        {/* <motion.div 
          className="contact_card"
          // initial={motionAnimationInitial}
          // whileInView={motionAnimationWhileInView}
        > */}
        <OneContactDiv>
            <a href="https://www.youtube.com/channel/UCzJYJShbzVmjFsQ2Umjdawg">
              <img src={iconYoutube} alt="Наш в YouTube" />
            </a>
            <a href="https://www.youtube.com/channel/UCzJYJShbzVmjFsQ2Umjdawg">Наш канал YouTube</a>
        </OneContactDiv>

        {/* </motion.div> */}

        {/* <motion.div 
          className="contact_card"
          // initial={motionAnimationInitial}
          // whileInView={motionAnimationWhileInView}
        > */}
        <OneContactDiv>
            <a href="https://t.me/joinchat/AAAAAE9SH58Owijn_BMDsg">
              <img src={iconTelegram} alt="Почитайте наш канал в Телеграм" />
            </a>
            <a href="https://t.me/joinchat/AAAAAE9SH58Owijn_BMDsg">Наш канал в Телеграм</a>
        </OneContactDiv>

        {/* </motion.div> */}

        {/* <motion.div className="contact_card"> */}
        <OneContactDiv>
          <a href="https://t.me/+RL0OnJ2D_Rego1dk">
            <img src={iconTelegram} alt="Поговорите с нами в Телеграм" />
          </a>
          <a href="https://t.me/+RL0OnJ2D_Rego1dk">Наш чат для обратной связи</a>
        </OneContactDiv>
        {/* </motion.div> */}
      </div>

      {/* </div> */}

      <div className='contacts-donations'>
        <div>
          Пожертвования на развитие клуба принимаются на карты (с пометкой "на клуб")
        </div>

        <div className='contacts-donations-line'>
          <label>Тинькофф:</label>
          <b>5536 9140 4560 9488</b>
          <CopyToClipboard text={'5536914045609488'} onCopy={onCopyText}>
            <img alt='' src={copyIcon} />
          </CopyToClipboard>
        </div>

        {isCopied ? <span style={{color: 'green'}}>Скопировано</span> : null}

      </div>

    </div>
    </Chapter>
  )
}

export default ChapterSix_Contacts