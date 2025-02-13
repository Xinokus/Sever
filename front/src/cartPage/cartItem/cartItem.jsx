import { useEffect, useState } from 'react'
import classes from '../cartPage.module.scss'

import minus from '../img/dec.png'
import plus from '../img/inc.png'
import check from '../img/check.png'

export let totalForItems

export default function CartItem({isSelected, onSale, image, name, cardPrice, regularPrice, discount, amount}){
    const [itemSelected, setItemSelected] = useState(false)

    useEffect(()=>{
        totalForItems = ((cardPrice * amount) - ((cardPrice * amount) * discount / 100)).toFixed(2)
    })

    return(
        <>
            <div className={classes.cart_item} style={onSale ? {height: '90px'} : {height: '72px'}} id='cartItem'>
                <div className={classes.info}>
                    <div className={classes.image}>
                        <div onClick={itemSelected ? ()=>setItemSelected(false) : ()=>setItemSelected(true)} className={itemSelected ? `${classes.selector} ${classes.active}` : classes.selector}>
                            <img src={itemSelected ? check : null} alt="" />
                        </div>
                        <div className={classes.item_image}>
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div className={classes.text}>
                        <p>{name}</p>
                        <div className={classes.prices} style={onSale ? null : {width: "87px"}}>
                            <div className={classes.card_price}>
                                <p>{cardPrice} ₽</p>
                                <p style={onSale ? null : {display: "none"}}>С картой</p>
                            </div>
                            <div className={classes.regular_price} style={onSale ? null : {display: "none"}}>
                                <p>{regularPrice} ₽</p>
                                <p>Обычная</p>
                            </div>
                            <div className={classes.per_item}>
                                <p>за шт.</p>
                            </div>
                            <div className={classes.discount} style={onSale ? null : {display: "none"}}>
                                <p>-{discount}%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.price_and_amount}>
                    <div className={classes.amount}>
                        <div>
                            <button type="button"><img src={minus} alt="" /></button>
                            <p>{amount}</p>
                            <button type="button"><img src={plus} alt="" /></button>
                        </div>
                    </div>
                    <div className={classes.price}>
                        <p style={onSale ? null : {display: "none"}}>{((cardPrice * amount) - ((cardPrice * amount) * discount / 100)).toFixed(2)} ₽</p>
                        <p className={onSale ? classes.active : null}>{(cardPrice * amount).toFixed(2)} ₽</p>
                    </div>
                </div>
            </div>
        </>
    )
}