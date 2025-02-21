import classes from './ordersTablePage.module.scss'

import Header from '../header/header'
import Footer from '../footer/footer'

import pfp from './img/avatar.png'
import check from './img/check.png'
import clock from './img/clock.png'
import calendar from './img/calendar.png'
import arrowRight from './img/arrow_right.png'
import Order from './order/order'

export default function AdminOrdersPage(){
    return(
        <>
            <Header/>
            <main className={classes.main}>
                <div className={classes.reroute}>
                    <a href='/'>Главная</a>
                    <img src={arrowRight} alt="" />
                    <a href='/admin-orders'>Заказы</a>
                </div>
                <section className={classes.section}>
                    <div className={classes.title}>
                        <p>Заказы</p>
                        <p>30</p>
                    </div>
                    <div className={classes.date}>
                        <div className={classes.calendar}>
                            <img src={calendar} alt="" />
                        </div>
                        <div className={`${classes.select_day} ${classes.active}`}>
                            <p>Сегодня</p>
                            <p>10</p>
                        </div>
                        <div className={classes.select_day}>
                            <p>1 апреля</p>
                            <p>2</p>
                        </div>
                        <div className={classes.select_day}>
                            <p>5 апреля</p>
                            <p>1</p>
                        </div>
                    </div>
                    <div className={classes.orders_table}>
                        <div className={classes.order_line}>
                            <div className={classes.time_and_amount}>
                                <div className={classes.time}>
                                    <img src={clock} alt="" />
                                    <p>11:00</p>
                                </div>
                                <div className={classes.amount}>
                                    <img src={check} alt="" />
                                    <p>5 / 5</p>
                                </div>
                            </div>
                            <div className={classes.cities}>
                                <div className={`${classes.city} ${classes.active}`}>
                                    <p>Усть-Ижма</p>
                                    <p>3</p>
                                </div>
                                <div className={classes.city}>
                                    <p>Галово</p>
                                    <p>2</p>
                                </div>
                            </div>
                            <div className={classes.orders}>
                                <Order
                                    id={355}
                                    pfp={pfp}
                                    name={'Антон'}
                                    phoneNumber={'7 912 888 77 55'}
                                />
                            </div>
                        </div>
                        <div className={classes.order_line}>
                            <div className={classes.time_and_amount}>
                                <div className={classes.time}>
                                    <img src={clock} alt="" />
                                    <p>14:00</p>
                                </div>
                                <div className={classes.amount}>
                                    <img src={check} alt="" />
                                    <p>8 / 8</p>
                                </div>
                            </div>
                            <div className={classes.cities}>
                                <div className={`${classes.city} ${classes.active}`}>
                                    <p>Усть-Ижма</p>
                                    <p>3</p>
                                </div>
                                <div className={classes.city}>
                                    <p>Галово</p>
                                    <p>2</p>
                                </div>
                            </div>
                            <div className={classes.orders}>
                                <Order
                                    id={355}
                                    pfp={pfp}
                                    name={'Антон'}
                                    phoneNumber={'7 912 888 77 55'}
                                />
                                <Order
                                    id={666}
                                    pfp={pfp}
                                    name={'Дмитрий'}
                                    phoneNumber={'7 912 888 77 55'}
                                />
                                <Order
                                    id={112}
                                    pfp={pfp}
                                    name={'Брух'}
                                    phoneNumber={'7 912 888 77 55'}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}