import classes from './contactsPage.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import Header from '../header/header'
import Footer from '../footer/footer'

import right_arrowG from './img/chevronRight.svg'
import phoneImg from './img/phone.svg'
import homeImg from './img/home.svg'
import percentImg from  './img/percent.svg'
import voshodImg from './img/voshod.svg'
import parysImg from './img/parys.svg'
import rabinushkaImg from './img/rabinushka.svg'
import pelisImg from './img/pelis.svg'

export default function ContactsPage(){
    const [activeMap2, setActiveMap2] = useState(1)
    return(
        <>
        <Header/>
        <main className={classes.Main_contact} >
            <div className={classes.return_container}>
                <div className={classes.cont_return_link}>
                    <a className={classes.return_link} href="/">Главная</a>
                    <img src={right_arrowG} alt="" />
                    <a href='/contacts'>Контакты</a>
                </div>
            </div>
            <section className={classes.sect_contacts}>
                <h1>Контакты</h1>
                <div className={classes.cont_contacts}>
                    <article className={classes.contacts1}>
                        <div className={classes.imgAd}>
                            <img src={homeImg} alt="" />
                        </div>
                        <p>Бухгалтерия, склад</p>
                        <a href="">+7 82140 92619</a>
                    </article>
                    <article className={classes.contacts2}>
                        <div className={classes.imgAd}>
                            <img src={percentImg} alt="" />
                        </div>
                        <p>Вопросы по системе лояльности</p>
                        <a href="">+7 908 716 33 97</a>
                    </article>
                </div>
            </section>
            <section className={classes.sect_three}>
                <div className={classes.title}>
                    <h2>Наши магазины</h2>
                </div>
                <div className={classes.maps}>
                    <div className={classes.choice}>
                        <button type="button" className={activeMap2 == 1 ? classes.active : null} onClick={() => setActiveMap2(1)}>
                            <p>п.Щельяюр</p>
                        </button>
                        <button type="button" className={activeMap2 == 2 ? classes.active : null} onClick={() => setActiveMap2(2)}>
                            <p>д.Вертеп</p>
                        </button>
                        <button type="button" className={activeMap2 == 3 ? classes.active : null} onClick={() => setActiveMap2(3)}>
                            <p>с.Краснобор</p>
                        </button>
                        <button type="button" className={activeMap2 == 4 ? classes.active : null} onClick={() => setActiveMap2(4)}>
                            <p>д.Диюр</p>
                        </button>
                    </div>
                    <div className={classes.cont_store}>
                    <div className={classes.store}>
                        <img src={voshodImg} alt="" />
                        <div className={classes.store_address}>
                            <img src={homeImg} alt="" />
                            <p>ул. Дорожная 10</p>
                        </div>
                        <div className={classes.store_phone}>
                            <img src={phoneImg} alt="" />
                            <p>+7 904 271 35 90</p>
                        </div>
                    </div>
                    <div className={classes.store}>
                        <img src={parysImg} alt="" />
                        <div className={classes.store_address}>
                            <img src={homeImg} alt="" />
                            <p>ул. Советская 87</p>
                        </div>
                        <div className={classes.store_phone}>
                            <img src={phoneImg} alt="" />
                            <p>+7 82140 91330</p>
                        </div>
                    </div>
                    <div className={classes.store}>
                        <img src={rabinushkaImg} alt="" />
                        <div className={classes.store_address}>
                            <img src={homeImg} alt="" />
                            <p>ул. Заводская 16</p>
                        </div>
                        <div className={classes.store_phone}>
                            <img src={phoneImg} alt="" /> 
                            <p>+7 82140 91101</p>
                        </div>
                    </div>
                    <div className={classes.store}>
                        <img src={pelisImg} alt="" />
                        <div className={classes.store_address}>
                            <img src={homeImg} alt="" />
                            <p>ул. Рабочая 1</p>
                        </div>
                        <div className={classes.store_phone}>
                            <img src={phoneImg} alt="" />
                            <p>+7 82140 91300</p>
                        </div>
                    </div>
                    </div>
                    <div className={classes.map}>
            
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}