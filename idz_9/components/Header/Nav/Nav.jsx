import React from "react";
import css from "./Nav.module.css";
import { ButtonLink } from "../UI/Link/ButtonLink";

export const Nav = () => {
    return <nav className={css.nav}>
        <h1 className={css.nav__logo}><img preload="auto" loop autoPlay src="1AF3.gif" className={css.imgGeass1}></img></h1>
        <ul className={css.nav__list}>
            <li>
                <ButtonLink href = "https://m0nspiet.github.io/M0nspiet/3.html">AMV</ButtonLink>
            </li>
            <li>
                <ButtonLink href = "https://vk.com/m0nspiet">Feedback</ButtonLink>
            </li>
            <li>
                <ButtonLink href = "/other">Other</ButtonLink>
            </li>
            <li>
                <ButtonLink href = "https://animego.org/">Anime Go</ButtonLink>
            </li>
            <li><ButtonLink href = "/sing-in">Sing In</ButtonLink></li>
        </ul>
    </nav>
};