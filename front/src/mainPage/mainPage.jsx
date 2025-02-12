import classes from './mainPage.module.scss'
import { useState } from 'react'

import Header from '../header/header'
import Footer from '../footer/footer.jsx'
import img from './img/img.png'
import right_arrow from './img/right_arrow.png'

import ProductCard from './productCard/productCard'
import { ProductInfo } from './productInfo.js'
import ArticleCard from './articleCard/articleCard.jsx'
import { ArticleInfo } from './articleInfo.js'

export default function MainPage(){
    const [activeMap, setActiveMap] = useState(1)
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
            <main className={classes.main}>
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
                <section className={classes.sect_two}>
                    <div className={classes.top}>
                        <div className={classes.title}>
                            <p>Новинки</p>
                        </div>
                        <div className={classes.link}>
                            <a href="">
                                <p>Все новинки</p>
                                <img src={right_arrow} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={classes.bot}>
                        <ProductCard
                            id={4}
                            onSale={ProductInfo[4].onSale}
                            regularPrice={ProductInfo[4].regularPrice}
                            cardPrice={ProductInfo[4].cardPrice}
                            img={ProductInfo[4].img}
                            name={ProductInfo[4].name}
                            star1={ProductInfo[4].star1}
                            star2={ProductInfo[4].star2}
                            star3={ProductInfo[4].star3}
                            star4={ProductInfo[4].star4}
                            star5={ProductInfo[4].star5}
                            discount={ProductInfo[4].discount}
                        />
                        <ProductCard
                            id={5}
                            onSale={ProductInfo[5].onSale}
                            regularPrice={ProductInfo[5].regularPrice}
                            cardPrice={ProductInfo[5].cardPrice}
                            img={ProductInfo[5].img}
                            name={ProductInfo[5].name}
                            star1={ProductInfo[5].star1}
                            star2={ProductInfo[5].star2}
                            star3={ProductInfo[5].star3}
                            star4={ProductInfo[5].star4}
                            star5={ProductInfo[5].star5}
                            discount={ProductInfo[5].discount}
                        />
                        <ProductCard
                            id={6}
                            onSale={ProductInfo[6].onSale}
                            regularPrice={ProductInfo[6].regularPrice}
                            cardPrice={ProductInfo[6].cardPrice}
                            img={ProductInfo[6].img}
                            name={ProductInfo[6].name}
                            star1={ProductInfo[6].star1}
                            star2={ProductInfo[6].star2}
                            star3={ProductInfo[6].star3}
                            star4={ProductInfo[6].star4}
                            star5={ProductInfo[6].star5}
                            discount={ProductInfo[6].discount}
                        />
                        <ProductCard
                            id={7}
                            onSale={ProductInfo[7].onSale}
                            regularPrice={ProductInfo[7].regularPrice}
                            cardPrice={ProductInfo[7].cardPrice}
                            img={ProductInfo[7].img}
                            name={ProductInfo[7].name}
                            star1={ProductInfo[7].star1}
                            star2={ProductInfo[7].star2}
                            star3={ProductInfo[7].star3}
                            star4={ProductInfo[7].star4}
                            star5={ProductInfo[7].star5}
                            discount={ProductInfo[7].discount}
                        />
                    </div>
                </section>
                <section className={classes.sect_two}>
                    <div className={classes.top}>
                        <div className={classes.title}>
                            <p>Покупали раньше</p>
                        </div>
                        <div className={classes.link}>
                            <a href="">
                                <p>Все покупки</p>
                                <img src={right_arrow} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={classes.bot}>
                        <ProductCard
                            id={4}
                            onSale={ProductInfo[4].onSale}
                            regularPrice={ProductInfo[4].regularPrice}
                            cardPrice={ProductInfo[4].cardPrice}
                            img={ProductInfo[4].img}
                            name={ProductInfo[4].name}
                            star1={ProductInfo[4].star1}
                            star2={ProductInfo[4].star2}
                            star3={ProductInfo[4].star3}
                            star4={ProductInfo[4].star4}
                            star5={ProductInfo[4].star5}
                            discount={ProductInfo[4].discount}
                        />
                        <ProductCard
                            id={5}
                            onSale={ProductInfo[5].onSale}
                            regularPrice={ProductInfo[5].regularPrice}
                            cardPrice={ProductInfo[5].cardPrice}
                            img={ProductInfo[5].img}
                            name={ProductInfo[5].name}
                            star1={ProductInfo[5].star1}
                            star2={ProductInfo[5].star2}
                            star3={ProductInfo[5].star3}
                            star4={ProductInfo[5].star4}
                            star5={ProductInfo[5].star5}
                            discount={ProductInfo[5].discount}
                        />
                        <ProductCard
                            id={6}
                            onSale={ProductInfo[6].onSale}
                            regularPrice={ProductInfo[6].regularPrice}
                            cardPrice={ProductInfo[6].cardPrice}
                            img={ProductInfo[6].img}
                            name={ProductInfo[6].name}
                            star1={ProductInfo[6].star1}
                            star2={ProductInfo[6].star2}
                            star3={ProductInfo[6].star3}
                            star4={ProductInfo[6].star4}
                            star5={ProductInfo[6].star5}
                            discount={ProductInfo[6].discount}
                        />
                        <ProductCard
                            id={7}
                            onSale={ProductInfo[7].onSale}
                            regularPrice={ProductInfo[7].regularPrice}
                            cardPrice={ProductInfo[7].cardPrice}
                            img={ProductInfo[7].img}
                            name={ProductInfo[7].name}
                            star1={ProductInfo[7].star1}
                            star2={ProductInfo[7].star2}
                            star3={ProductInfo[7].star3}
                            star4={ProductInfo[7].star4}
                            star5={ProductInfo[7].star5}
                            discount={ProductInfo[7].discount}
                        />
                    </div>
                </section>
                <section className={classes.sect_three}>
                    <div className={classes.title}>
                        <p>Наши магазины</p>
                    </div>
                    <div className={classes.maps}>
                        <div className={classes.choice}>
                            <button type="button" className={activeMap == 1 ? classes.active : null} onClick={() => setActiveMap(1)}>
                                <p>п.Щельяюр</p>
                            </button>
                            <button type="button" className={activeMap == 2 ? classes.active : null} onClick={() => setActiveMap(2)}>
                                <p>д.Вертеп</p>
                            </button>
                            <button type="button" className={activeMap == 3 ? classes.active : null} onClick={() => setActiveMap(3)}>
                                <p>с.Краснобор</p>
                            </button>
                            <button type="button" className={activeMap == 4 ? classes.active : null} onClick={() => setActiveMap(4)}>
                                <p>д.Диюр</p>
                            </button>
                        </div>
                        <div className={classes.map}>

                        </div>
                    </div>
                </section>
                <section className={classes.sect_four}>
                    <div className={classes.title}>
                        <p>Специальные предложения</p>
                    </div>
                    <div className={classes.special}>
                        <div className={classes.special_one}>
                            <div className={classes.con}>
                                <p>Оформите карту «Северяночка»</p>
                                <p>И получайте бонусы при покупке в магазинах и на сайте</p>
                            </div>
                        </div>
                        <div className={classes.special_two}>
                            <div className={classes.con}>
                                <p>Покупайте акционные товары</p>
                                <p>И получайте вдвое больше бонусов</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={classes.sect_five}>
                    <div className={classes.top}>
                        <div className={classes.title}>
                            <p>Статьи</p>
                        </div>
                        <div className={classes.link}>
                            <a href="">
                                <p>Все статьи</p>
                                <img src={right_arrow} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={classes.bot}>
                        <ArticleCard
                        id={0}
                        image={ArticleInfo[0].image}
                        date={ArticleInfo[0].date}
                        title={ArticleInfo[0].title}
                        desc={ArticleInfo[0].desc}
                        />
                        <ArticleCard
                        id={1}
                        image={ArticleInfo[1].image}
                        date={ArticleInfo[1].date}
                        title={ArticleInfo[1].title}
                        desc={ArticleInfo[1].desc}
                        />
                        <ArticleCard
                        id={2}
                        image={ArticleInfo[2].image}
                        date={ArticleInfo[2].date}
                        title={ArticleInfo[2].title}
                        desc={ArticleInfo[2].desc}
                        />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}