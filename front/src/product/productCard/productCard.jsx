import classes from './productCard.module.scss'

import noHeart from '../img/heart.png'
import Heart from '../img/heartActive.png'
import { useState } from 'react'

export default function ProductCard({id, onSale, regularPrice, cardPrice, img, name, star1, star2, star3, star4, star5, discount}){
    const [isFavorite, addFavorite] = useState(false)

    return(
        <>
            <div className={classes.card} key={id}>
                <div className={classes.image} style={{backgroundImage: "url("+img+")"}}>
                    <div style={onSale ? {} : {visibility: 'hidden'}} className={classes.discount}>
                        <p>{discount}</p>
                    </div>
                    <div className={isFavorite ? `${classes.favorite} ${classes.active}` : `${classes.favorite}`} onClick={isFavorite ? ()=>addFavorite(false) : ()=>addFavorite(true)}>
                        <button type="button" ><img src={isFavorite ? Heart : noHeart} style={isFavorite ? {opacity: 1} : {opacity: 0.5}} alt="" className={isFavorite ? `${classes.active}` : null}/></button>
                    </div>
                </div>
                <div className={classes.price}>
                    <div className={classes.with_card}>
                        <p>{cardPrice} ₽</p>
                        <p style={onSale ? {} : {display: 'none'}}>С картой</p>
                    </div>
                    <div className={classes.regular} style={onSale ? {} : {display: 'none'}}>
                        <p>{regularPrice} ₽</p>
                        <p>Обычная</p>
                    </div>
                </div>
                <div className={classes.name}>
                    <p>{name}</p>
                </div>
                <div className={classes.stars}>
                    <img src={star1} alt="" />
                    <img src={star2} alt="" />
                    <img src={star3} alt="" />
                    <img src={star4} alt="" />
                    <img src={star5} alt="" />
                </div>
                <div className={`${classes.cart}`}>
                    <button type="button"><p>В корзину</p></button>
                </div>
            </div>
        </>
    )
}