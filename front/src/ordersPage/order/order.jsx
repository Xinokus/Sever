import classes from './order.module.scss'

import ProductCard from '../productCard/productCard'
import calendar from '../img/calendar.png'
import eye from '../img/eye.png'

import full_star from '../img/full_star.png'
import half_star from '../img/half_star.png'
import empty_star from '../img/empty_star.png'

import { ProductInfo } from '../../product/productInfo'

export default function Order({date, time, state, price, button, showFullOrder}){
    return(
        <>
            <div className={classes.order}>
                <div className={classes.info}>
                    <div className={classes.left}>
                        <p>{date}</p>
                        <p>{time}</p>
                        <p>{state}</p>
                    </div>
                    <div className={classes.right}>
                        <p>{price} ₽</p>
                        <button type="button"><img src={calendar} alt="" /><p>{button}</p></button>
                    </div>
                </div>
                <div className={classes.items}>
                    <ProductCard
                        amount={1}
                        id={1}
                        onSale={false}
                        regularPrice={ProductInfo[0].regularPrice}
                        cardPrice={ProductInfo[0].cardPrice}
                        img={ProductInfo[0].img}
                        name={ProductInfo[0].name}
                        star1={ProductInfo[0].star1}
                        star2={ProductInfo[0].star2}
                        star3={ProductInfo[0].star3}
                        star4={ProductInfo[0].star4}
                        star5={ProductInfo[0].star5}
                        discount={0}
                    />
                    <ProductCard
                        amount={4}
                        id={1}
                        onSale={false}
                        regularPrice={ProductInfo[0].regularPrice}
                        cardPrice={ProductInfo[0].cardPrice}
                        img={ProductInfo[0].img}
                        name={ProductInfo[0].name}
                        star1={ProductInfo[0].star1}
                        star2={ProductInfo[0].star2}
                        star3={ProductInfo[0].star3}
                        star4={ProductInfo[0].star4}
                        star5={ProductInfo[0].star5}
                        discount={0}
                    />
                    <ProductCard
                        amount={9}
                        id={1}
                        onSale={false}
                        regularPrice={ProductInfo[0].regularPrice}
                        cardPrice={ProductInfo[0].cardPrice}
                        img={ProductInfo[0].img}
                        name={ProductInfo[0].name}
                        star1={ProductInfo[0].star1}
                        star2={ProductInfo[0].star2}
                        star3={ProductInfo[0].star3}
                        star4={ProductInfo[0].star4}
                        star5={ProductInfo[0].star5}
                        discount={0}
                    />
                    <ProductCard
                        amount={12}
                        id={1}
                        onSale={false}
                        regularPrice={ProductInfo[0].regularPrice}
                        cardPrice={ProductInfo[0].cardPrice}
                        img={ProductInfo[0].img}
                        name={ProductInfo[0].name}
                        star1={ProductInfo[0].star1}
                        star2={ProductInfo[0].star2}
                        star3={ProductInfo[0].star3}
                        star4={ProductInfo[0].star4}
                        star5={ProductInfo[0].star5}
                        discount={0}
                    />
                </div>
                <div className={classes.show_more}>
                    <button type="button"><img src={eye} alt="" /><p>Посмотреть заказ</p></button>
                </div>
            </div>
        </>
    )
}