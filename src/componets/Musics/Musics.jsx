import React, {useState} from 'react';
import SearchBar from "material-ui-search-bar";
import classes from './Musics.module.css'
import "../../styles.css";
import AudioPlayer from "./AudioPlayer";


const Musics = () => {

    const musics = [
        {
            title: "Патрон",
            artist: "Miyagi & Andy Panda",
            audioSrc: 'Miyagi & Andy Panda - Патрон.mp3',
            image: 'Miyagi-patron.jpg',
            color: "#429615"
        }, {
            title: "Она немного ниже меня ростом",
            artist: "Kambulat",
            audioSrc: 'Kambulat - Она немного ниже меня ростом.mp3',
            image: 'Kambulat-onaNemnogo.jpg',
            color: "#00aeb0"
        }, {
            title: "Письма",
            artist: "Kambulat",
            audioSrc: 'Kambulat - Письма.mp3',
            image: 'Kambulat-pisma.jpg',
            color: "#0c3ce7"
        }, {
            title: "Everyday",
            artist: "Macan",
            audioSrc: 'MACAN - Everyday.mp3',
            image: 'Macan-Everyday.jpg',
            color: "#b75726"
        }, {
            title: "Я Пытался Любить Тебя",
            artist: "Macan",
            audioSrc: 'Macan - Я Пытался Любить Тебя.mp3',
            image: 'Macan-Everyday.jpg',
            color: "#e314b3"
        },
    ];

    musics.forEach((music, index) => {
            try {
                musics[index].audioSrc = require("../../assets/audio/" + music.audioSrc).default
                musics[index].image = require("../../assets/audio/" + music.image).default

            } catch (e) {
                musics[index].audioSrc = require("../../assets/audio/Kambulat - Письма.mp3").default
                musics[index].image = require("../../assets/audio/Kambulat-onaNemnogo.jpg").default
                console.log('Not found image');
            }
        }
    );

    //Создаем аrr  где будем знать какой включен сейчас;
    const [playId, setPlayId] = useState(-1);

    // При нажимание будет остоновлить осталних
    const musicPlayChange = (id) => {
        setPlayId(id);
    };


    return (
        <div>
            <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                style={{
                    margin: '0 auto',
                    maxWidth: 800
                }}
            />

            <div className={classes.musicsContainer}>

                {
                    // Проверям если playId === index не  равен тогда надо отклчить песню отпровляем false
                    musics.map((music, index) => <div className={classes.content}
                                                      onClick={() => musicPlayChange(index)}>
                        <AudioPlayer tracks={[music]} isPlay={playId === index}/></div>)
                }

            </div>

        </div>
    );
};

export default Musics;