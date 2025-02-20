import React, { useContext, useEffect, useState } from 'react'
import classes from '../cartPage.module.scss'

import minus from '../img/dec.png'
import plus from '../img/inc.png'
import check from '../img/check.png'

export let totalForItem

export default function CartItem({isSelected, onSale, image, name, cardPrice, regularPrice, discount, amount}){
    const [itemSelected, setItemSelected] = useState(false)
    const [getAmount, setAmount] = useState(amount)
    const [getPrice, setPrice] = useState(((cardPrice * getAmount) - ((cardPrice * amount) * discount / 100)).toFixed(2))
    let [totalPrice, setTotalPrice] = useState(getPrice)

    useEffect(()=>{
        setPrice(((cardPrice * getAmount) - ((cardPrice * amount) * discount / 100)).toFixed(2))
        
        if(itemSelected){
            setTotalPrice(getPrice)
            totalPrice = parseFloat(totalPrice)
            totalForItem = totalPrice
            console.log(totalForItem)
        }
    })

    function IncreaseAmount(){
        if(getAmount != 99){
            setAmount(getAmount + 1)
        }
        
    }
    function DecreaseAmount(){
        if(getAmount != 0){
            setAmount(getAmount - 1)
        }
        
    }

    function SelectItem(){
        setItemSelected(true)
        isSelected = itemSelected
    }

    function DeselectItem(){
        setItemSelected(false)
        isSelected = itemSelected
    }

    return(
        <>
            <div className={classes.cart_item} style={onSale ? {height: '90px'} : {height: '72px'}} name={'cart_item'}>
                <div className={classes.info}>
                    <div className={classes.image}>
                        <div onClick={itemSelected ? DeselectItem : SelectItem} className={itemSelected ? `${classes.selector} ${classes.active}` : classes.selector} name='cartItem'>
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
                            <button type="button"><img src={minus} onClick={DecreaseAmount} alt="" /></button>
                            <p>{getAmount}</p>
                            <button type="button"><img src={plus} onClick={IncreaseAmount} alt="" /></button>
                        </div>
                    </div>
                    <div className={classes.price}>
                        <p name={'item_price'} style={onSale ? null : {display: "none"}}>{((cardPrice * getAmount) - ((cardPrice * amount) * discount / 100)).toFixed(2)} ₽</p>
                        <p className={onSale ? classes.active : null}>{(cardPrice * getAmount).toFixed(2)} ₽</p>
                    </div>
                </div>
            </div>
        </>
    )
}