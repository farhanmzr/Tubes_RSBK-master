import React from "react";
import "./about.scss";
import styled from 'styled-components'

const Container = styled.div `
display : inline-block;
background-color: #f2f2f2;
border-radius: 15px;
box-shadow: 0px 0px 5px grey;
color: #f6f6f6;
// width: 70%%;
height: 80%;
padding : 0 25px 25px;
margin 130px;`


const Rowcard = styled.div `
display: table;
width: 100%;
table-layout: fixed;
border-spacing: 0px;
text-align: center;
`

const ColumnCard = styled.div `
    display: table-cell;
    text-align: center;


`

const About = () => {
    return ( <
        div className = "about-section" >
        <
        h1 > About Us < /h1> <
        p className = "text" > We are team from Kelompok 21 RSBK < /p> <
        Rowcard >
        <
        ColumnCard >
        <
        Container >
        <
        h2 > Farhan Mazario < /h2> <
        img src = "https://i.postimg.cc/d0DqRGj8/farhan.png"
        alt = "farhan"
        className = "img" / >
        <
        p className = "tekss" > Here is my github link < /p> <
        p > < a href = "https://github.com/farhanmzr"
        className = "button" > Github < /a></p >
        <
        /Container> < /
        ColumnCard > <
        ColumnCard >
        <
        Container >
        <
        h2 > Tasya Chandra < /h2> <
        img src = "https://i.postimg.cc/v8fRf0fr/FB-IMG-1570892204053.jpg"
        alt = "tasya"
        className = "img" / >
        <
        p className = "tekss" > Here is my github link < /p> <
        p > < a href = "https://github.com/tasyaachann"
        className = "button" > Github < /a></p >
        <
        /Container> < /
        ColumnCard > <
        /Rowcard> < /
        div >

    );
};

export default About;