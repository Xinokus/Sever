import classes from './mainPage.module.scss'

import Header from '../header/header'
import img from './img/img.png'
import right_arrow from './img/right_arrow.png'

import ProductCard from './productCard/productCard'
import { ProductInfo } from './productInfo.js'

export default function MainPage(){
    return(
        <>
            <Header/>
            <section className={classes.sect_one}>
                <div className={classes.con}>
                    <div className={classes.image}>
                        <img src={img} alt="" />
                    </div>
                    <div className={classes.text}>
                        <p>Доставка бесплатно от 1000 ₽</p>
                    </div>
                </div>
            </section>
            <main>
                <section className={classes.sect_two}>
                    <div className={classes.top}>
                        <div className={classes.title}>
                            <p>Акции</p>
                        </div>
                        <div className={classes.link}>
                            <a href="">
                                <p>Все акции</p>
                                <img src={right_arrow} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={classes.bot}>
                        <ProductCard
                            id={0}
                            onSale={ProductInfo[0].onSale}
                            regularPrice={ProductInfo[0].regularPrice}
                            cardPrice={ProductInfo[0].cardPrice}
                            img={ProductInfo[0].img}
                            name={ProductInfo[0].name}
                            star1={ProductInfo[0].star1}
                            star2={ProductInfo[0].star2}
                            star3={ProductInfo[0].star3}
                            star4={ProductInfo[0].star4}
                            star5={ProductInfo[0].star5}
                            discount={ProductInfo[0].discount}
                        />
                        <ProductCard
                            id={1}
                            onSale={ProductInfo[1].onSale}
                            regularPrice={ProductInfo[1].regularPrice}
                            cardPrice={ProductInfo[1].cardPrice}
                            img={ProductInfo[1].img}
                            name={ProductInfo[1].name}
                            star1={ProductInfo[1].star1}
                            star2={ProductInfo[1].star2}
                            star3={ProductInfo[1].star3}
                            star4={ProductInfo[1].star4}
                            star5={ProductInfo[1].star5}
                            discount={ProductInfo[1].discount}
                        />
                        <ProductCard
                            id={2}
                            onSale={ProductInfo[2].onSale}
                            regularPrice={ProductInfo[2].regularPrice}
                            cardPrice={ProductInfo[2].cardPrice}
                            img={ProductInfo[2].img}
                            name={ProductInfo[2].name}
                            star1={ProductInfo[2].star1}
                            star2={ProductInfo[2].star2}
                            star3={ProductInfo[2].star3}
                            star4={ProductInfo[2].star4}
                            star5={ProductInfo[2].star5}
                            discount={ProductInfo[2].discount}
                        />
                        <ProductCard
                            id={3}
                            onSale={ProductInfo[3].onSale}
                            regularPrice={ProductInfo[3].regularPrice}
                            cardPrice={ProductInfo[3].cardPrice}
                            img={ProductInfo[3].img}
                            name={ProductInfo[3].name}
                            star1={ProductInfo[3].star1}
                            star2={ProductInfo[3].star2}
                            star3={ProductInfo[3].star3}
                            star4={ProductInfo[3].star4}
                            star5={ProductInfo[3].star5}
                            discount={ProductInfo[3].discount}
                        />
                    </div>
                </section>
            </main>
        </>
    )
}