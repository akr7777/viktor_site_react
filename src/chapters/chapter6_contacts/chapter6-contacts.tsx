import './contacts.scss'
import iconEmail from '../../assets/icons/icon-email.png'
import iconYoutube from '../../assets/icons/icon-youtube.png'
import iconPhone from '../../assets/icons/icon-phone.png'
import iconTelegram from '../../assets/icons/icon-telegram.png'
import iconVk from '../../assets/icons/icon-vk.png'

export const ChapterSix_Contacts = () => {
    return (
        <div className="chapter" id="contacts">
        <center><h2>Наши контакты</h2></center>
        <div className="contacts_div">

          <div className="contact_card">
              <a href="tel:+79990041869">
                <img src={iconPhone} alt="Позвоните нам, чтобы узнать подробности." />
              </a>
              <a href="tel:+79168668913">+7 (916) 866-89-13</a>
          </div>

          <div className="contact_card">
              <a href="mailto:samoz.spiridonov@gmail.com">
                <img src={iconEmail} alt="Написать нам письмо можно по этой почте." />
              </a>
              <a href="mailto:samoz.spiridonov@gmail.com">samoz.spiridonov@gmail.com</a>
          </div>

          <div className="contact_card">
              <a href="https://vk.com/id579768890">
                <img src={iconVk} alt="Наша группа Вконтакте" />
              </a>
              <a href="https://m.vk.com/club218308796">Наша страница Вконтакте</a>
          </div>

          <div className="contact_card">
              <a href="https://www.youtube.com/channel/UCzJYJShbzVmjFsQ2Umjdawg">
                <img src={iconYoutube} alt="Наш в YouTube" />
              </a>
              <a href="https://www.youtube.com/channel/UCzJYJShbzVmjFsQ2Umjdawg">Наш канал YouTube</a>
          </div>

          <div className="contact_card">
              <a href="https://t.me/joinchat/AAAAAE9SH58Owijn_BMDsg">
                <img src={iconTelegram} alt="Почитайте наш канал в Телеграм" />
              </a>
              <a href="https://t.me/joinchat/AAAAAE9SH58Owijn_BMDsg">Наш канал в Телеграм</a>
          </div>

          <div className="contact_card">
            <a href="https://t.me/+RL0OnJ2D_Rego1dk">
              <img src={iconTelegram} alt="Поговорите с нами в Телеграм" />
            </a>
            <a href="https://t.me/+RL0OnJ2D_Rego1dk">Наш чат для обратной связи</a>
        </div>

        </div>

      </div>
    )
}