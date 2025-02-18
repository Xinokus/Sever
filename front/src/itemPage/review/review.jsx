import classes from './review.module.scss'

export default function Review({pfp, name, star1, star2, star3, star4, star5, date, text}){
    return(
        <>
            <div className={classes.review}>
                <div className={classes.writer_info}>
                    <img src={pfp} alt="" />
                    <p>{name}</p>
                </div>
                <div className={classes.stars_and_date}>
                    <div className={classes.stars}>
                        <img src={star1} alt="" />
                        <img src={star2} alt="" />
                        <img src={star3} alt="" />
                        <img src={star4} alt="" />
                        <img src={star5} alt="" />
                    </div>
                    <div className={classes.date}>
                        <p>{date}</p>
                    </div>
                </div>
                <div className={classes.text}>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}