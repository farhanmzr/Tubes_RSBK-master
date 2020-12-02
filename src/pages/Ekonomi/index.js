import Axios from "axios";
import React, { useEffect, useState } from "react";
import { CardNews } from "../../components/props";
import "./ekonomi.scss";

const Ekonomi = () => {
    const [news, setNews] = useState({ data: [] });

    const urlApi = "https://www.news.developeridn.com/ekonomi";
    const proxy = "https://cors-anywhere.herokuapp.com/";

    useEffect(() => {
        const fetchData = async() => {
            const result = await Axios(`${proxy}${urlApi}`);
            setNews(result.data);
        };

        fetchData();
    }, []);

    return ( <
        div className = "ekonomi-wrapper" >
        <
        h1 > Berita Ekonomi Terkini < /h1> <
        div className = "content-wrapper" > {
            news.data.map((item) => {
                return ( <
                    CardNews key = { item.id }
                    title = { item.judul }
                    desc = { item.waktu }
                    photo = { item.poster }
                    link = { item.link }
                    />
                );
            })
        } <
        /div> < /
        div >
    );
};

export default Ekonomi;