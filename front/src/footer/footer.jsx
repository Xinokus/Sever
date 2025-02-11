import classes from './footer.module.scss'

import logo from './img/logo.png'
import facebook from './img/facebook.png'
import instagram from './img/instagram.png'
import ok from './img/ok.png'
import vkontakte from './img/vkontakte.png'
import phone from './img/phone.png'

export default function Footer(){
    return(
        <>
            <footer>
                <div className={classes.con}>
                    <div className={classes.left}>
                        <div className={classes.logo}>
                            <img src={logo} alt="" />
                        </div>
                        <div className={classes.links}>
                            <a href="">О компании</a>
                            <a href="">Контакты</a>
                            <a href="">Вакансии</a>
                            <a href="">Статьи</a>
                            <a href="">Политика обработки персональных данных</a>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.socials}>
                            <a href=""><img src={instagram} alt="" /></a>
                            <a href=""><img src={facebook} alt="" /></a>
                            <a href=""><img src={vkontakte} alt="" /></a>
                            <a href=""><img src={ok} alt="" /></a>
                        </div>
                        <div className={classes.contacts}>
                            <img src={phone} alt="" />
                            <p>8 800 777 33 33</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}