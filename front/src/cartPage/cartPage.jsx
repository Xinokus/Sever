import classes from './cartPage.module.scss'
import { useEffect, useState } from 'react'

import Header from '../header/header'
import Footer from '../footer/footer'

import arrowRight from './img/arrow_right.png'
import minus from './img/minus.png'
import smile from './img/smile.png'

import CartItem from './cartItem/cartItem'
import item from './img/item.png'


export default function CartPage(){
    const [getTotal, setTotal] = useState(258.1)
    const [selectAll, setSelectAll] = useState(false)
    const [discount, setDiscount] = useState(8.01)
    let totalPrice = 0
    let [itemAmount, setItemAmount] = useState(0)

    const [switchState, setSwitchState] = useState(true)
    
    useEffect(()=>{
        document.title = 'Корзина'
        CheckTotal()
        let items = document.getElementsByName('cart_item')
        setItemAmount(items.length)

        SetTotalPrice()
    })

    function SetTotalPrice(){
        let items = document.getElementsByName('item_price')
        for(let i = 0; i < items.length; i++){
            console.log(parseFloat(items[i].innerHTML))
            totalPrice += parseFloat(items[i].innerHTML)
            console.log(totalPrice)
            setTotal(totalPrice)
        }
    }

    function SelectAll(){
        setSelectAll(true)
    }

    function DeselectAll(){
        setSelectAll(false)
    }

    function CheckTotal(){
        // setTotal(parseFloat(document.getElementById('total_price').innerHTML))
        // console.log(parseFloat(getTotal))
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
                                <p>{itemAmount}</p>
                            </div>
                        </div>
                        <div className={classes.general}>
                            <div className={classes.items}>
                                <div className={classes.select}>
                                    <div className={classes.select_all}>
                                        <button type="button" onClick={selectAll ? DeselectAll : SelectAll}><img src={minus} alt="" /></button>
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
                                    discount={0}
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
                                    discount={0}
                                    amount={3}
                                    />
                                    <CartItem
                                    onSale={false}
                                    image={item}
                                    cardPrice={'44.50'}
                                    regularPrice={'50.50'}
                                    name={'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»'}
                                    discount={0}
                                    amount={2}
                                    />
                                </div>
                            </div>
                            <div className={classes.payment}>
                                <div className={classes.withdraw}>
                                    <div className={classes.switch}>
                                        <div className={classes.body} style={switchState ? {backgroundColor: '#70C05B'} : {backgroundColor: '#8F8F8F'}} onClick={switchState ? ()=>setSwitchState(false) : ()=>setSwitchState(true)}>
                                            <div style={switchState ? {transform: 'translate(11px)'} : {transform: 'translate(-11px)'}}></div>
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
                                        <p>{parseFloat(getTotal).toFixed(2)} ₽</p>
                                    </div>
                                    <div>
                                        <p>Скидка</p>
                                        <p>-{discount} ₽</p>
                                    </div>
                                </div>
                                <div className={classes.line}>

                                </div>
                                <div className={classes.total}>
                                    <div className={classes.total_price}>
                                        <p>Итог</p>
                                        <p id='total_price'>{(getTotal - discount).toFixed(2)} ₽</p>
                                    </div>
                                    <div className={classes.bonuses}>
                                        <img src={smile} alt="" />
                                        <p>Вы получаете <span>100 бонусов</span></p>
                                    </div>
                                </div>
                                <div className={classes.submit}>
                                    <div className={classes.warning} style={parseFloat(getTotal - discount) >= 1000 ? {display: 'none'} : null}>
                                        <p>Минимальная сумма заказа 1000р</p>
                                    </div>
                                    <button type="submit" className={parseFloat(getTotal - discount) >= 1000 ? classes.active : null}>Оформить заказ</button>
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