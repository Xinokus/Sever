import classes from './categoryPage.module.scss'
import { useEffect } from 'react'

import Header from '../header/header'
import Footer from '../footer/footer'

import arrowRight from './img/arrow_right.png'

import milk from './img/milk.png'
import bread from './img/bread.png'
import vegies from './img/vegies.png'
import frozen from './img/frozen.png'
import drinks from './img/drinks.png'
import candy from './img/candy.png'
import coffee from './img/tea-coffee.png'
import grocery from './img/grocery.png'
import healthy from './img/healthy-food.png'
import pets from './img/for-pets.png'
import baby from './img/for-babies.png'
import meat from './img/meat.png'
import non_edible from './img/non-edible.png'

export default function CategoryPage(){
    useEffect(()=>{
        document.title = 'Каталог'
    })
    return(
        <>
            <Header/>
            <main className={classes.main}>
                <section className={classes.section}>
                    <div className={classes.top}>
                        <a href='/'>Главная</a>
                        <img src={arrowRight} alt="" />
                        <a href='/catalog'>Каталог</a>
                    </div>
                    <div className={classes.bot}>
                        <div className={classes.title}>
                            <p>Каталог</p>
                        </div>
                        <div className={classes.categories}>
                            <div className={classes.subcategory}>
                                <div className={classes.category_wide} style={{backgroundImage: "url(" + milk + ")"}}>
                                    <a href='/catalog/milk-cheese-eggs' className={classes.category_con}>
                                        <p>Молоко, сыр, яйцо</p>
                                    </a>
                                </div>
                                <div className={classes.category_regular} style={{backgroundImage: "url(" + bread + ")"}}>
                                    <a href='/catalog/bread' className={classes.category_con}>
                                        <p>Хлеб</p>
                                    </a>
                                </div>
                                <div className={classes.category_regular} style={{backgroundImage: "url(" + vegies + ")"}}>
                                    <a href='/catalog/fruits-and-vegetables' className={classes.category_con}>
                                        <p>Фрукты и овощи</p>
                                    </a>
                                </div>
                            </div>
                            <div className={classes.subcategory}>
                                <div className={classes.category_regular} style={{backgroundImage: "url(" + frozen + ")"}}>
                                    <a href='/catalog/frozen-food' className={classes.category_con}>
                                        <p>Замороженные продукты</p>
                                    </a>
                                </div>
                                <div className={classes.category_regular} style={{backgroundImage: "url(" + drinks + ")"}}>
                                    <a href='/catalog/drinks' className={classes.category_con}>
                                        <p>Напитки</p>
                                    </a>
                                </div>
                                <div className={classes.category_regular} style={{backgroundImage: "url(" + candy + ")"}}>
                                    <a href='/catalog/candy' className={classes.category_con}>
                                        <p>Кондитерские изделия</p>
                                    </a>
                                </div>
                                <div className={classes.category_regular} style={{backgroundImage: "url(" + coffee + ")"}}>
                                    <a href='/catalog/tea-coffee' className={classes.category_con}>
                                        <p>Чай, кофе</p>
                                    </a>
                                </div>
                            </div>
                            <div className={classes.subcategory}>
                                <div className={classes.category_regular} style={{backgroundImage: "url(" + grocery + ")"}}>
                                    <a href='/catalog/grocery' className={classes.category_con}>
                                        <p>Бакалея</p>
                                    </a>
                                </div>
                                <div className={classes.category_regular} style={{backgroundImage: "url(" + healthy + ")"}}>
                                    <a href='/catalog/healthy-food' className={classes.category_con}>
                                        <p>Здоровое питание</p>
                                    </a>
                                </div>
                                <div className={classes.category_wide} style={{backgroundImage: "url(" + pets + ")"}}>
                                    <a href='/catalog/for-pets' className={classes.category_con}>
                                        <p>Зоотовары</p>
                                    </a>
                                </div>
                            </div>
                            <div className={classes.subcategory}>
                                <div className={classes.category_regular} style={{backgroundImage: "url(" + baby + ")"}}>
                                    <a href='/catalog/for-babies' className={classes.category_con}>
                                        <p>Детское питание</p>
                                    </a>
                                </div>
                                <div className={classes.category_wide} style={{backgroundImage: "url(" + meat + ")"}}>
                                    <a href='/catalog/meat' className={classes.category_con}>
                                        <p>Мясо, птица, колбаса</p>
                                    </a>
                                </div>
                                <div className={classes.category_regular} style={{backgroundImage: "url(" + non_edible + ")"}}>
                                    <a href='/catalog/non-edible' className={classes.category_con}>
                                        <p>Непродовольственные товары</p>
                                    </a>
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