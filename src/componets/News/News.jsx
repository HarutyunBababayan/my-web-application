import React from 'react'
import classes from './News.module.css'
import {NavLink} from "react-router-dom";
import StepperPageChange from "../common/StepperPageChange/StepperPageChange";


const News = () => {

    const news = [
        {
            title: "Вакцинация в Германии и ЕС: коренной перелом наступит в ближайшие 2 месяца",
            text: `Дефицит вакцин от COVID-19 заканчивается, во 2-м квартале поставки в ЕС
                        увеличатся в три раза. Благодаря росту производства в Европе прививочная кампания вступает в
                        решающую фазу.`,
            image: "NewsCovid.jpg",
            url: "/europe/news"
        },
        {
            title: "Неслучайные связи: Лавров перехватил у США индийскую повестку",
            text: "Глава российской дипломатии столкнулся со старым знакомым во время визита в Индию",
            image: "Aziya.jpg",
            url: "/nearEast/news"
        },
        {
            title: "Брешь в обороне: Иран добрался до ядерного реактора Израиля",
            text: "Объект в Димоне оказался в зоне обстрела подконтрольных Тегерану сил",
            image: "Iran.jpg",
            url: "/europe/news/1"
        }
    ];


    const newsOther = [
        {
            title: "ЕВРОПА",
            text: "Новая Пражская весна: зачем Чехия порушила отношения с Россией",
            image: "Evrope.jpg",
            url: "/nearEast/"
        },
        {
            title: "БЛИЖНИЙ ВОСТОК",
            text: "Голос подполья: Россия предупредила Сирию об ужасах накануне выборов",
            image: "newsEvrope.jpg",
            url: "/nearEast/1"
        },
        {
            title: "ЕВРОПА",
            text: " Лашет ли: как раскол в партии Меркель повлияет на Россию",
            image: "vostok.jpg",
            url: "/nearEast/2"
        }
    ];

    const worldNews = [
        {
            time: "18:22",
            text: "СБУ задержала агента ФСБ в Житомирской области",
            url: "/news/world/1",
            location: "ЕВРОПА"
        },
        {
            time: "18:32",
            text: "Литва и Латвия выслали российских дипломатов в знак солидарности с Чехией",
            url: "/news/world/2",
            location: "ЕВРОПА"
        },
        {
            time: "18:42",
            text: "РФ и Египет договорились о возобновлении авиасообщения",
            url: "/news/world/3",
            location: "МИР"
        },
        {
            time: "18:52",
            text: "Украина начала военные учения на границе с Крымом",
            url: "/news/world/4",
            location: "ЕВРОПА"
        },
        {
            time: "19:02",
            text: "Япония ввела режим ЧС в связи с распространением COVID-19",
            url: "/news/world/5",
            location: "МИР"
        }
    ];

    return (
        <div className={classes.NewsContainer}>
            <div className={classes.headingBreakingNews}>NEWS<span>24</span></div>
            <div className={classes.newsWrapper}>

                <StepperPageChange data={news} classesName={classes}/>


                <div className={classes.dailyNewsBlock}>
                    {newsOther.map((newC) => <div>
                        <img src={require("../../assets/images/" + newC.image).default} alt="News"/>
                        <span className={classes.dailyHeadingText}>{newC.title}</span>
                        <NavLink to={newC.url}>
                            <p className={classes.paragraphTextStyle}> {newC.text}</p>
                        </NavLink>
                    </div>)}
                </div>
                <div className={classes.secondaryNewsBlock}>
                    <span className={classes.headingBlockStyle}>НОВОСТИ МИРА</span>
                    {worldNews.map((newsW) => <div>
                        <div className={classes.titleDivider}>
                            <NavLink className={classes.newsBlock} to={newsW.url}>
                                <span className={classes.timePublishedNews}>{newsW.time}</span>
                                <p className={classes.headingPublishedNews}>{newsW.text}</p>
                            </NavLink>
                        </div>
                        <span className={classes.locationTextStyle}>{newsW.location}</span>
                    </div>)}
                    <div className={classes.buttonBlock}>
                        <NavLink to={'global/news'}>Все новости</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default News;