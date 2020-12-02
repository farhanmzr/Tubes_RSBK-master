import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";

const { Meta } = Card;
const CardNews = ({ photo, title, desc, link }) => {
        return ( <
            Card hoverable style = {
                { width: 450, marginBottom: 20 } }
            cover = { < img alt = "example"
                src = { photo }
                />} >
                <
                Meta title = { title }
                /> <
                Meta description = { desc }
                />

                <
                a href = { link }
                target = "_blank"
                rel = "noreferrer" >
                Baca Berita Sekarang <
                /a> <
                /Card>
            );
        };

        export default CardNews;