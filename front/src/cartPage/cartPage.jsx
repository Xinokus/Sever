import classes from './cartPage.module.scss'

import Header from '../header/header'
import Footer from '../footer/footer'

import arrowRight from './img/arrow_right.png'
import minus from './img/minus.png'
import smile from './img/smile.png'

import CartItem from './cartItem/cartItem'
import item from './img/item.png'
import { useEffect, useState } from 'react'

import { totalForItems } from './cartItem/cartItem'

export default function CartPage(){
    const [selectAll, setSelectAll] = useState(0)

    useEffect(()=>{
        document.title = 'Корзина'
    })

    function SelectAll(){
        setSelectAll(2)
        let array = document.querySelectorAll('cartItem')
        array.forEach(element => {
            element.itemSelected = true
        })
    }

    return(
        <>
            <Header/>
            <main className={classes.main}>
                <section className={classes.section}>
                    <div className={classes.top}>
                        <a href='/'>Главная</a>
                        <img src={arrowRight} alt="" />
                        <a href='/catalog'>Корзина</a>
                    </div>
                    <div className={classes.bot}>
                        <div className={classes.title}>
                            <p>Корзина</p>
                            <div>
                                <p>3</p>
                            </div>
                        </div>
                        <div className={classes.general}>
                            <div className={classes.items}>
                                <div className={classes.select}>
                                    <div className={classes.select_all}>
                                        <button type="button" onClick={SelectAll}><img src={minus} alt="" /></button>
                                        <p>Выделить всё</p>
                                    </div>
                                    <div className={classes.delete}>
                                        <p>Удалить выбранные</p>
                                    </div>
                                </div>
                                <div className={classes.list}>
                                    <CartItem
                                    onSale={false}
                                    image={item}
                                    cardPrice={'44.50'}
                                    regularPrice={'50.50'}
                                    name={'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»'}
                                    discount={10}
                                    amount={2}
                                    />
                                    <CartItem
                                    onSale={true}
                                    image={item}
                                    cardPrice={'44.50'}
                                    regularPrice={'50.50'}
                                    name={'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»'}
                                    discount={10}
                                    amount={2}
                                    />
                                    <CartItem
                                    onSale={false}
                                    image={item}
                                    cardPrice={'44.50'}
                                    regularPrice={'50.50'}
                                    name={'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»'}
                                    discount={10}
                                    amount={2}
                                    />
                                    <CartItem
                                    onSale={false}
                                    image={item}
                                    cardPrice={'44.50'}
                                    regularPrice={'50.50'}
                                    name={'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»'}
                                    discount={10}
                                    amount={2}
                                    />
                                </div>
                            </div>
                            <div className={classes.payment}>
                                <div className={classes.withdraw}>
                                    <div className={classes.switch}>
                                        <div className={classes.body}>
                                            <div></div>
                                        </div>
                                        <div className={classes.text}>
                                            <p>Списать 200 ₽</p>
                                        </div>
                                    </div>
                                    <div className={classes.card_fund}>
                                        <p>На карте накоплено 200 ₽</p>
                                    </div>
                                </div>
                                <div className={classes.line}>

                                </div>
                                <div className={classes.price_math}>
                                    <div>
                                        <p>3 товара</p>
                                        <p>258,10 ₽</p>
                                    </div>
                                    <div>
                                        <p>Скидка</p>
                                        <p>-8,01 ₽</p>
                                    </div>
                                </div>
                                <div className={classes.line}>

                                </div>
                                <div className={classes.total}>
                                    <div className={classes.total_price}>
                                        <p>Итог</p>
                                        <p>250.09 ₽</p>
                                    </div>
                                    <div className={classes.bonuses}>
                                        <img src={smile} alt="" />
                                        <p>Вы получаете <span>100 бонусов</span></p>
                                    </div>
                                </div>
                                <div className={classes.submit}>
                                    <div className={classes.warning}>
                                        <p>Минимальная сумма заказа 1000р</p>
                                    </div>
                                    <button type="submit">Оформить заказ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}