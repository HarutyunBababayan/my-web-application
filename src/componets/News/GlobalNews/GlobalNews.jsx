import React from "react"

const GlobalNews = () => {

    const allNews = [
        {
            title: "ОБЩЕСТВО",
            text: "Вузам разрешили уйти на «дистанционку» между майскими праздникам",
            image: "общество.jpg",
        },
        {
            title: "ЭКОНОМИКА",
            text: "В России подорожали овощи",
            image: "экономика.jpg",
        },
        {
            title: "ТЕХНОЛОГИИ",
            text: "Sony: дефицит PlayStation 5 сохранится ещё на год",
            image: "технологии.jpg",
        },
        {
            title: "МИР",
            text: "МИД Болгарии вызвал российского посла",
            image: "мир.jpg",
        },
        {
            title: "ДРУГИЕ",
            text: "Матыцин осудил снятие российского флага на ЧМ по шашкам в Польше",
            image: "другие.jpg",
        },
        {
            title: "ИГРЫ",
            text: "Sony назвала игры из майского PS Plus",
            image: "игры.jpg",
        },
        {
            title: "ЕДИНОБОРСТВА",
            text: "Вузам разрешили уйти на «дистанционку» между майскими праздникам",
            image: "единоборства.jpg",
        },
        {
            title: "ПОЛИТИКА",
            text: "«Всё разворуют»: учёный оценил идею Хуснуллина укрупнить регионы",
            image: "политика.jpg",
        }
    ];

    return (
        <div>
            {allNews.map((news) => <div>
                <div>
                        <img  src={require("../../../assets/images/" +news.image).default}/>
                        <h6>{news.title}</h6>
                        <span>{news.text}</span>
                </div>
            </div>)}

        </div>
    )
};

export default GlobalNews;