import classes from './aboutPage.module.scss'
import { Link } from 'react-router-dom'

import right_arrowG from './img/chevronRight.svg'
import checkImg from './img/check.svg'
import Thanks from './img/thanks.svg'

import Header from '../header/header'
import Footer from '../footer/footer'
export default function AboutPage(){
    return(
        <>
        <Header/>
        <main className={classes.MainAbout}>
            <div className={classes.return_container}>
                <div className={classes.cont_return_link}>
                    <Link className={classes.return_link} to="/">Главная</Link>
                    <img src={right_arrowG} alt="" />
                    <p>Вакансии</p>
                </div>
            </div>
            
            <section className={classes.sectAbout}>
                <div className={classes.contAbout}>
                    <div className={classes.aboutText}>
                        <h1>О компании</h1>
                        <p>Мы непрерывно развиваемся и <span>работаем над совершенствованием сервиса,</span> заботимся о наших клиентах, стремимся к лучшему будущему.</p>
                    </div>
                    <div className={classes.contGays}>
                        <img src="" alt="" />
                     </div>
                </div>
            </section>
            <section className={classes.AboutInfo}>
                <div className={classes.AboutCart1}>
                    <div className={classes.imgMe1}>
                        <img src={checkImg} alt="" />
                    </div>
                    <p>Мы занимаемся <br /> розничной торговлей</p>
                    <h3>Более 20 лет.</h3>
                </div>
                <div className={classes.AboutCart2}>
                    <div className={classes.imgMe2}>
                    <img src={checkImg} alt="" />
                    </div>
                    <p>Основная миссия компании</p>
                    <h3>Максимальное качество товаров и услуг по доступной цене.</h3>
                </div>
                <div className={classes.AboutCart3}>
                    <div className={classes.imgMe3}>
                    <img src={checkImg} alt="" />
                    </div>
                    <p>Отличительная черта нашей сети</p>
                    <h3>Здоровая и полезная продукция местного производства внаших магазинах.</h3>
                </div>
            </section>
            <section className={classes.ThanksImg}>
                <img src={Thanks} alt="" />
            </section>
        </main>
        <Footer/>
        </>
    )
}