import React from "react";
import { Header } from "../../components/props";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./mainApp.scss";
import Home from "../Home";
import Nasional from "../Nasional";
import Internasional from "../Internasional";
import Ekonomi from "../Ekonomi";
import Olahraga from "../Olahraga";
import Teknologi from "../Teknologi";
import Hiburan from "../Hiburan";
import About from "../About";

function MainApp() {
    return ( <
        Router >
        <
        div className = "main-app-wrapper" >
        <
        Header / >
        <
        div className = "content-wrapper" >
        <
        Switch >
        <
        Route exact path = "/" >
        <
        Home / >
        <
        /Route> <
        Route path = "/nasional-page" >
        <
        Nasional / >
        <
        /Route> <
        Route path = "/internasional-page" >
        <
        Internasional / >
        <
        /Route> <
        Route path = "/ekonomi-page" >
        <
        Ekonomi / >
        <
        /Route> <
        Route path = "/olahraga-page" >
        <
        Olahraga / >
        <
        /Route> <
        Route path = "/teknologi-page" >
        <
        Teknologi / >
        <
        /Route> <
        Route path = "/hiburan-page" >
        <
        Hiburan / >
        <
        /Route> <
        Route path = "/about-page" >
        <
        About / >
        <
        /Route> < /
        Switch > <
        /div> < /
        div > <
        /Router>
    );
}

export default MainApp;