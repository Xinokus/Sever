import classes from './jobsPage.module.scss'
import PhoneImg from './img/phone.svg'
export default function JobsCards(props){
    return(
        <article className={classes.jobs_card}>
            <h2>{props.postName}</h2>
            <h3>Требования</h3>
            <p>{props.post}</p>
            <h3>Обязанности</h3>
            <p>{props.duties}</p>
            <h3>Условия</h3>
            <p>{props.conditions}</p>
            <h3>Звоните</h3>
            <div className={classes.jobs_card_phone}>
                <img src={PhoneImg} alt="" />
                <a href="">+7 904 271 35 90</a>
            </div>
        </article>
    )
}