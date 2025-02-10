import classes from './header.module.scss'

import logo from './img/logo.png'
import menu from './img/menu.png'
import search from './img/search.png'
import favorite from './img/favorite.png'
import orders from './img/orders.png'
import cart from './img/cart.png'
import blankPFP from './img/profile_picture.png'
import downArrow from './img/down_arrow.png'

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <div className={classes.left}>
                        <div className={classes.logo}>
                            <a href="/"><img src={logo} alt="" /></a>
                        </div>
                        <div className={classes.catalog_search}>
                            <div className={classes.catalog}>
                                <img src={menu} alt="" />
                                <p>Каталог</p>
                            </div>
                            <form className={classes.search_bar}>
                                <input type="text" name="q" id="q" placeholder='Найти товар' />
                                <button type="submit"><img src={search} alt="" /></button>
                            </form>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.links}>
                            <div className={classes.favorite}>
                                <img src={favorite} alt="" />
                                <p>Избранное</p>
                            </div>
                            <div className={classes.orders}>
                                <img src={orders} alt="" />
                                <p>Заказы</p>
                            </div>
                            <div className={classes.cart}>
                                <img src={cart} alt="" />
                                <p>Корзина</p>
                            </div>
                        </div>
                        <div className={classes.account}>
                            <div className={classes.con}>
                                <div>
                                    <img src={blankPFP} alt="" className={classes.pfp}/>
                                    <p>Войти</p>
                                </div>
                                <div>
                                    <img src={downArrow} alt="" className={classes.arrow}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}