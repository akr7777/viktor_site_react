import './footer.scss'

const MyFooter = () => {
    const nowDate: Date = new Date()
    
    return (
        <div className='footer_div'>
            <div>© All rights are reserved</div>
            <div>Клуб "Спиридонов" 2020-{nowDate.getFullYear()}</div>
        </div>
    )
}

export default MyFooter