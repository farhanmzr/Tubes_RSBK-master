import React from "react";
import { useHistory } from "react-router-dom";
import { StyledLink } from "../../element";
import "./header.scss";

function Header() {
    const history = useHistory();

    return ( <
        div className = "header" >
        <
        h2 className = "logo-app" > Tugas Besar Praktikum RSBK - Kelompok 21 < /h2> <
        div className = "link-wrapper" >
        <
        StyledLink label = "Home"
        onClick = {
            () => history.push("/")
        }
        /> <
        StyledLink label = "Nasional"
        onClick = {
            () => history.push("/nasional-page")
        }
        /> <
        StyledLink label = "Internasional"
        onClick = {
            () => history.push("/internasional-page")
        }
        /> <
        StyledLink label = "Ekonomi"
        onClick = {
            () => history.push("/ekonomi-page")
        }
        /> <
        StyledLink label = "Olahraga"
        onClick = {
            () => history.push("/olahraga-page")
        }
        /> <
        StyledLink label = "Teknologi"
        onClick = {
            () => history.push("/teknologi-page")
        }
        /> <
        StyledLink label = "Hiburan"
        onClick = {
            () => history.push("/hiburan-page")
        }
        /> <
        StyledLink label = "About"
        onClick = {
            () => history.push("/about-page")
        }
        />

        <
        /div> < /
        div >
    );
}

export default Header;