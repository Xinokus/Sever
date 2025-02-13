import classes from './jobsPage.module.scss';
import right_arrowG from './img/chevronRight.svg'
import { Link } from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';

import jobsData from './jobsData';
import JobsCards from './jobsCards';

export default function JobsPage() {
    return (
        <>
        <Header/>
            <main className={classes.main_jobs_Page}>
                <section className={classes.sect_title}>
                    <div className={classes.cont_return_link}>
                        <Link className={classes.return_link} to="/">Главная</Link>
                        <img src={right_arrowG} alt="" />
                        <p>Вакансии</p>
                    </div>
                    <h1>Вакансии</h1>
                </section>
                <section className={classes.sect_cards}>
                    {jobsData.map((job) => (
                        <JobsCards
                            key={job.id}
                            postName={job.postName}
                            post={job.post}
                            duties={job.duties}
                            conditions={job.conditions}
                        />
                    ))}
                </section>
            </main>
        <Footer/>
        </>
    );
}
