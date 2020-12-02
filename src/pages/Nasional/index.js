import Axios from "axios";
import React, { useEffect, useState } from "react";
import { CardNews } from "../../components/props";
import "./nasional.scss";

const Nasional = () => {
    const [news, setNews] = useState({ data: [] });

    const urlApi = "https://www.news.developeridn.com/nasional";
    const proxy = "https://cors-anywhere.herokuapp.com/";

    useEffect(() => {
        const fetchData = async() => {
            const result = await Axios(`${proxy}${urlApi}`);
            setNews(result.data);
            // console.log(result.data);
        };

        fetchData();
    }, []);

    return ( <
        div className = "nasional-wrapper" >
        <
        h1 > Berita Nasional Terkini < /h1> <
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

export default Nasional;