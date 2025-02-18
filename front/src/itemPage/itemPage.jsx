import classes from './itemPage.module.scss'

import Header from '../header/header'
import Footer from '../footer/footer'

import arrowRight from './img/arrow_right.png'
import emptyStar from './img/empty_star.png'
import halfStar from './img/half_star.png'
import fullStar from './img/full_star.png'
import share from './img/share.png'
import heart from './img/heart.png'
import cart from './img/shopping-cart.png'
import smile from './img/smile.png'
import bell_off from './img/bell-off.png'
import info from './img/info.png'

import bigFullStar from './img/big-full-star.png'
import bigEmptyStar from './img/big-empty-star.png'

import ProductCard from '../product/productCard/productCard'
import { ProductInfo } from '../product/productInfo'

import Review from './review/review'
import pfp from './img/profile_picture.png'

export default function ItemPage(){
    return(
        <>
            <Header/>
            <main className={classes.main}>
                <div className={classes.title_of_page}>
                    <a href="/">Главная</a>
                    <img src={arrowRight} alt="" />
                    <a href="/catalog">Каталог</a>
                    <img src={arrowRight} alt="" />
                    <a href="/catalog/milk-cheese-eggs">Молоко, сыр, яйцо</a>
                    <img src={arrowRight} alt="" />
                    <a href="/catalog/milk-cheese-eggs/maslo-prostokvashino">Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г</a>
                </div>
                <section className={classes.sect_one}>
                    <div className={classes.name}>
                        <p>Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г</p>
                    </div>
                    <div className={classes.middle}>
                        <div className={classes.id}>
                            <p>арт. 371431</p>
                        </div>
                        <div className={classes.rating}>
                            <div className={classes.stars}>
                                <img src={fullStar} alt="" />
                                <img src={fullStar} alt="" />
                                <img src={fullStar} alt="" />
                                <img src={fullStar} alt="" />
                                <img src={fullStar} alt="" />
                            </div>
                            <div className={classes.text}>
                                <p>3 отзыва</p>
                            </div>
                        </div>
                        <div className={classes.share}>
                            <img src={share} alt="" />
                            <p>Поделиться</p>
                        </div>
                        <div className={classes.favorite}>
                            <img src={heart} alt="" />
                            <p>В избранное</p>
                        </div>
                    </div>
                    <div className={classes.bottom}>
                        <div className={classes.left}>
                            <div className={classes.row_of_images}>
                                <div><img src="" alt="" /></div>
                                <div><img src="" alt="" /></div>
                                <div><img src="" alt="" /></div>
                                <div><img src="" alt="" /></div>
                                <div><img src="" alt="" /></div>
                            </div>
                            <div className={classes.main_image}>
                                <p>-50%</p>
                            </div>
                        </div>
                        <div className={classes.center}>
                            <div className={classes.pricing}>
                                <div className={classes.prices}>
                                    <div className={classes.regular}>
                                        <p>192,69 ₽</p>
                                        <p>Обычная цена</p>
                                    </div>
                                    <div className={classes.card}>
                                        <p>108,99 ₽</p>
                                        <p>С картой Северяночки <img src={info} alt="" /></p>
                                    </div>
                                </div>
                                <div className={classes.into_cart}>
                                    <button type="button"><img src={cart} alt="" /><p>В корзину</p></button>
                                </div>
                                <div className={classes.bonuses}>
                                    <img src={smile} alt="" />
                                    <p>Вы получаете <span>10 бонусов</span></p>
                                </div>
                                <div className={classes.notify}>
                                    <img src={bell_off} alt="" />
                                    <p>Уведомить о снижении цены</p>
                                </div>
                            </div>
                            <div className={classes.info}>
                                <div className={classes.line}>
                                    <p>Бренд</p>
                                    <p>ПРОСТОКВАШИНО</p>
                                </div>
                                <div className={classes.line}>
                                    <p>Страна производителя</p>
                                    <p>Россия</p>
                                </div>
                                <div className={classes.line}>
                                    <p>Упаковка</p>
                                    <p>180 г</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.right}>
                            <div className={classes.text}>
                                <p>Похожие</p>
                            </div>
                            <div className={classes.simular_items}>
                                <div className={classes.item}>
                                    <div><img src="" alt="" /></div>
                                    <p>157,50 ₽</p>
                                </div>
                                <div className={classes.item}>
                                    <div><img src="" alt="" /></div>
                                    <p>157,50 ₽</p>
                                </div>
                                <div className={classes.item}>
                                    <div><img src="" alt="" /></div>
                                    <p>157,50 ₽</p>
                                </div>
                                <div className={classes.item}>
                                    <div><img src="" alt="" /></div>
                                    <p>157,50 ₽</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={classes.sect_two}>
                    <div className={classes.title}>
                        <p>С этим товаров покупают</p>
                    </div>
                    <div className={classes.line}>
                    <ProductCard
                            id={0}
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
                            discount={ProductInfo[0].discount}
                            
                        />
                        <ProductCard
                            id={1}
                            onSale={false}
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
                            link={'/catalog/milk-cheese-eggs/maslo-prostokvashino'}
                        />
                        <ProductCard
                            id={2}
                            onSale={false}
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
                            onSale={false}
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
                <section className={classes.sect_three}>
                    <div className={classes.title}>
                        <p>Отзывы</p>
                    </div>
                    <div className={classes.review_sect}>
                        <div className={classes.rating}>
                            <div className={classes.top}>
                                <div className={classes.stars}>
                                    <img src={fullStar} alt="" />
                                    <img src={fullStar} alt="" />
                                    <img src={fullStar} alt="" />
                                    <img src={fullStar} alt="" />
                                    <img src={emptyStar} alt="" />
                                </div>
                                <div className={classes.number_outta_number}>
                                    <p>4 из 5</p>
                                </div>
                            </div>
                            <div className={classes.ratings}>
                                <div className={classes.stars}>
                                    <p>5</p>
                                    <div>
                                        <img src={fullStar} alt="" />
                                        <img src={fullStar} alt="" />
                                        <img src={fullStar} alt="" />
                                        <img src={fullStar} alt="" />
                                        <img src={fullStar} alt="" />
                                    </div>
                                    <p>1</p>
                                </div>
                                <div className={classes.stars}>
                                    <p>4</p>
                                    <div>
                                        <img src={fullStar} alt="" />
                                        <img src={fullStar} alt="" />
                                        <img src={fullStar} alt="" />
                                        <img src={fullStar} alt="" />
                                        <img src={emptyStar} alt="" />
                                    </div>
                                    <p>1</p>
                                </div>
                                <div className={classes.stars}>
                                    <p>3</p>
                                    <div>
                                        <img src={fullStar} alt="" />
                                        <img src={fullStar} alt="" />
                                        <img src={fullStar} alt="" />
                                        <img src={emptyStar} alt="" />
                                        <img src={emptyStar} alt="" />
                                    </div>
                                    <p>0</p>
                                </div>
                                <div className={classes.stars}>
                                    <p>2</p>
                                    <div>
                                        <img src={fullStar} alt="" />
                                        <img src={fullStar} alt="" />
                                        <img src={emptyStar} alt="" />
                                        <img src={emptyStar} alt="" />
                                        <img src={emptyStar} alt="" />
                                    </div>
                                    <p>0</p>
                                </div>
                                <div className={classes.stars}>
                                    <p>1</p>
                                    <div>
                                        <img src={fullStar} alt="" />
                                        <img src={emptyStar} alt="" />
                                        <img src={emptyStar} alt="" />
                                        <img src={emptyStar} alt="" />
                                        <img src={emptyStar} alt="" />
                                    </div>
                                    <p>1</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.reviews}>
                            <Review
                            pfp={pfp}
                            name={'Татьяна'}
                            star1={fullStar}
                            star2={fullStar}
                            star3={fullStar}
                            star4={fullStar}
                            star5={fullStar}
                            date={'22.02.2020'}
                            text={'приятный вкус'}
                            />
                            <Review
                            pfp={pfp}
                            name={'Мария'}
                            star1={fullStar}
                            star2={fullStar}
                            star3={fullStar}
                            star4={fullStar}
                            star5={emptyStar}
                            date={'22.02.2020'}
                            text={'Масло среднее, есть вкуснее'}
                            />
                            <Review
                            pfp={pfp}
                            name={'Алексей'}
                            star1={fullStar}
                            star2={emptyStar}
                            star3={emptyStar}
                            star4={emptyStar}
                            star5={emptyStar}
                            date={'22.02.2020'}
                            text={'Покупали в том числе в этом весе. Масло по вкусу и органолептическим свойствам совершенно не похоже на натуральное. Упаковка выглядит как напечатанная на дешёвом принтере. На наш взгляд продукт является подделкой или контрафактной продукцией. Просим разобраться.'}
                            />
                        </div>
                    </div>
                    <form onSubmit={e => e.preventDefault()} className={classes.leave_review}>
                        <div className={classes.text_and_rating}>
                            <div className={classes.text}>
                                <p>Ваша оценка</p>
                            </div>
                            <div className={classes.rating}>
                                <img src={bigEmptyStar} alt="" />
                                <img src={bigEmptyStar} alt="" />
                                <img src={bigEmptyStar} alt="" />
                                <img src={bigEmptyStar} alt="" />
                                <img src={bigEmptyStar} alt="" />
                            </div>
                        </div>
                        <div className={classes.review_input}>
                            <textarea name="" id="" style={{resize: 'none'}} placeholder='Отзыв'></textarea>
                        </div>
                        <div className={classes.review_submit}>
                            <button type="submit">Отправить отзыв</button>
                        </div>
                    </form>
                </section>
                <section className={classes.sect_four}>
                    <div className={classes.top}>
                        <div className={classes.title}>
                            <p>Акции</p>
                        </div>
                        <div className={classes.link}>
                            <a href="">
                                <p>Все акции</p>
                                <img src={arrowRight} alt="" />
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
                            link={'/catalog/milk-cheese-eggs/maslo-prostokvashino'}
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
            <Footer/>
        </>
    )
}