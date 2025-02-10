import classes from '../mainPage.module.scss'

import favorite from '../img/favorite.png'

export default function ProductCard({id, onSale, regularPrice, cardPrice, img, name, star1, star2, star3, star4, star5, discount}){
    return(
        <>
            <div className={classes.card} key={id}>
                <div className={classes.image} style={{backgroundImage: "url("+img+")"}}>
                    <div style={onSale ? {} : {display: 'none'}}>
                        <p>{discount}</p>
                    </div>
                    <div>
                        <button type="button"><img src={favorite} alt="" /></button>
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
                <div className={classes.into_cart}>
                    <button type="button"><p>В корзину</p></button>
                </div>
            </div>
        </>
    )
}