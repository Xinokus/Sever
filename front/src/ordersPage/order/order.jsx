import classes from './order.module.scss'

import ProductCard from '../productCard/productCard'
import calendar from '../img/calendar.png'
import eye from '../img/eye.png'

import full_star from '../img/full_star.png'
import half_star from '../img/half_star.png'
import empty_star from '../img/empty_star.png'

import { ProductInfo } from '../../product/productInfo'
import { useEffect, useState } from 'react'

export default function Order({date, time, state, price, button, showFullOrder, isThereMore}){

    const [showMore, setShowMore] = useState(showFullOrder)
    const [isMore, setIsMore] = useState(isThereMore)

    useEffect(()=>{
        let states = document.getElementsByName('state')
        let buttons = document.getElementsByName('button')

        buttons.forEach(e => {
            switch(e.querySelector('p').innerHTML){
                case 'Заказать':
                    e.querySelector('p').style.width = '100%'
                    e.querySelector('img').style.display = 'none'
                    e.style.backgroundColor = '#FF6633'
                    break;
            }
        });

        states.forEach(e => {
            switch(e.innerHTML){
                case 'Возврат':
                    e.style.color = 'white'
                    e.style.backgroundColor = "#D80000"
                    break;
                case 'Не доставили':
                    e.style.color = 'white'
                    e.style.backgroundColor = "#D80000"
                    break;
                case 'Получен':
                    e.style.color = 'white'
                    e.style.backgroundColor = "#70C05B"
                    break;
            }
        });
    })

    function ShowMore(){
        setIsMore(false)
        setShowMore(true)
    }

    return(
        <>
            <div className={classes.order}>
                <div className={classes.info}>
                    <div className={classes.left}>
                        <p>{date}</p>
                        <p>{time}</p>
                        <p name='state'>{state}</p>
                    </div>
                    <div className={classes.right}>
                        <p>{price} ₽</p>
                        <button name='button' type="button"><img name='img' src={calendar} alt="" /><p name='p'>{button}</p></button>
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
                <div className={classes.items} name="add_items" style={showMore ? {display: 'flex'} : {display: "none"}}>
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
                <div className={classes.show_more}  style={isMore ? {display: 'flex'} : {display:'none'}}>
                    <button type="button" onClick={ShowMore}><img src={eye} alt=""/><p>Посмотреть заказ</p></button>
                </div>
            </div>
        </>
    )
}