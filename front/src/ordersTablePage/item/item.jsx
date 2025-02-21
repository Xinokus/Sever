import classes from './item.module.scss'

import box from './img/box.png'
import cart from './img/shopping-cart.png'

export default function Item({amount, square, category, name, image}){
    return(
        <>
            <div className={classes.item}>
                <div className={classes.image} style={{backgroundImage: 'url('+image+')'}}>
                    <div className={classes.amount}>
                        <img src={cart} alt="" />
                        <p>{amount}</p>
                    </div>
                    <div className={classes.square}>
                        <img src={box} alt="" />
                        <p>{square}</p>
                    </div>
                </div>
                <div className={classes.info}>
                    <div className={classes.category}>
                        <p>{category}</p>
                    </div>
                    <div className={classes.name}>
                        <p>{name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}