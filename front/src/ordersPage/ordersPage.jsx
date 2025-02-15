import classes from './ordersPage.module.scss'

import Header from '../header/header'
import Footer from '../footer/footer'

import arrowRight from './img/arrow_right.png'
import { useEffect, useState } from 'react'

import Order from './order/order'

export default function OrdersPage(){
    useEffect(()=>{
        document.title = 'Заказы'
    })
    return(
        <>
            <Header/>
            <main className={classes.main}>
                <section className={classes.section}>
                    <div className={classes.top}>
                        <a href="/">Главная</a>
                        <img src={arrowRight} alt="" />
                        <a href="/favorite">Заказы</a>
                    </div>
                    <div className={classes.bot}>
                        <div className={classes.title}>
                            <p>Заказы</p>
                        </div>
                        <div className={classes.order_container}>
                            <Order
                                date={'01.04.2021'}
                                time={'11:00-14:00'}
                                state={'В процессе'}
                                price={'3 006.83'}
                                button={'Когда доставить'}
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}